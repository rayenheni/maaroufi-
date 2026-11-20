import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { office } from "../content";
import { useLang } from "../i18n";
import { cn } from "../utils/cn";
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  WhatsApp,
} from "./Icons";
import { container, Eyebrow, Reveal, SectionTitle } from "./ui";

type Form = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};
type Errors = Partial<Record<"name" | "phone" | "email" | "message", boolean>>;

const empty: Form = { name: "", phone: "", email: "", subject: "", message: "" };

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
          {icon}
        </span>
        <p className="text-[12px] font-bold text-muted">{label}</p>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function Contact({
  preset,
  token,
}: {
  preset: string | null;
  token: number;
}) {
  const { t } = useLang();
  const c = t.contact;
  const f = c.form;
  const allServices = [...t.services.civil, ...t.services.criminal];

  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [links, setLinks] = useState<{ wa: string; mail: string } | null>(null);

  useEffect(() => {
    if (token > 0 && preset) {
      setForm((cur) => ({ ...cur, subject: preset }));
      setLinks(null);
    }
  }, [token, preset]);

  const update = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((cur) => ({ ...cur, [k]: v }));
    if (k !== "subject") setErrors((e) => ({ ...e, [k]: false }));
  };

  const validate = () => {
    const next: Errors = {};
    if (form.name.trim().length < 3) next.name = true;
    if (form.phone.replace(/\D/g, "").length < 8) next.phone = true;
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = true;
    if (form.message.trim().length < 10) next.message = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const build = () => {
    const subject = form.subject === "other" ? f.other : form.subject;
    const lines = [f.msgIntro, "", `${f.name}: ${form.name.trim()}`, `${f.phone}: ${form.phone.trim()}`];
    if (form.email.trim()) lines.push(`${c.email}: ${form.email.trim()}`);
    if (subject) lines.push(`${f.subject}: ${subject}`);
    lines.push("", form.message.trim());
    const text = lines.join("\n");
    return {
      wa: `https://wa.me/${office.whatsapp}?text=${encodeURIComponent(text)}`,
      mail: `mailto:${office.email}?subject=${encodeURIComponent(f.mailSubject)}&body=${encodeURIComponent(text)}`,
    };
  };

  // No server: the message is handed to WhatsApp or the visitor's mail app.
  const send = (channel: "wa" | "mail") => {
    if (!validate()) return;
    const next = build();
    if (channel === "wa") window.open(next.wa, "_blank", "noopener,noreferrer");
    else window.location.href = next.mail;
    setLinks(next);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send("wa");
  };

  const field = (invalid?: boolean) =>
    cn(
      "w-full rounded-xl border bg-white px-4 py-3.5 text-[15px] text-dark transition placeholder:text-muted/60 focus:outline-none focus:ring-4",
      invalid
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : "border-line focus:border-primary focus:ring-primary/10",
    );
  const label = "mb-2 block text-[13px] font-bold text-dark";
  const err = "mt-1.5 text-[12.5px] font-semibold text-red-600";

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className={container}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow>{c.eyebrow}</Eyebrow>
          </div>
          <SectionTitle className="mt-4">{c.title}</SectionTitle>
          <p className="mt-5 text-[17px] leading-[1.9] text-muted">{c.text}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Info */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <Reveal>
              <InfoCard icon={<Phone className="h-5 w-5" />} label={c.phone}>
                <a href={office.phoneHref} className="font-latin text-2xl font-semibold text-dark transition hover:text-primary">
                  <span dir="ltr" className="inline-block">{office.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${office.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[13.5px] font-bold text-primary"
                >
                  <WhatsApp className="h-4 w-4" />
                  WhatsApp
                </a>
              </InfoCard>
            </Reveal>
            <Reveal delay={60}>
              <InfoCard icon={<Mail className="h-5 w-5" />} label={c.email}>
                <a href={`mailto:${office.email}`} className="break-all text-lg font-bold text-dark transition hover:text-primary">
                  <span dir="ltr" className="inline-block">{office.email}</span>
                </a>
              </InfoCard>
            </Reveal>
            <Reveal delay={120}>
              <InfoCard icon={<MapPin className="h-5 w-5" />} label={c.address}>
                <p className="text-[16px] font-bold leading-relaxed text-dark">
                  {t.addressLines[0]}
                  <br />
                  {t.addressLines[1]}
                </p>
                <a
                  href={office.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[13.5px] font-bold text-primary"
                >
                  {c.map}
                  <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
                </a>
              </InfoCard>
            </Reveal>
            <Reveal delay={180}>
              <InfoCard icon={<Clock className="h-5 w-5" />} label={c.hours}>
                <dl className="space-y-2 text-[14.5px]">
                  {c.hoursRows.map((row) => (
                    <div key={row.d} className="flex justify-between gap-4">
                      <dt className="text-muted">{row.d}</dt>
                      <dd className="font-bold text-dark">{row.h}</dd>
                    </div>
                  ))}
                </dl>
              </InfoCard>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-[2rem] bg-sand p-7 md:p-10">
              {links ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-heading text-3xl font-bold text-dark">{f.okTitle}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{f.okText}</p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a href={links.wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[14px] font-bold text-white">
                      <WhatsApp className="h-5 w-5" />
                      {f.okWa}
                    </a>
                    <a href={links.mail} className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3.5 text-[14px] font-bold text-primary">
                      <Mail className="h-5 w-5" />
                      {f.okMail}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setForm(empty); setErrors({}); setLinks(null); }}
                    className="mt-6 text-[13.5px] font-semibold text-muted underline underline-offset-4"
                  >
                    {f.again}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <h3 className="font-heading text-2xl font-bold text-dark md:text-3xl">{f.title}</h3>
                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={label}>{f.name}</label>
                      <input id="name" type="text" autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder={f.namePh} aria-invalid={errors.name || undefined} className={field(errors.name)} />
                      {errors.name && <p id="name-error" className={err}>{f.errName}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className={label}>{f.phone}</label>
                      <input id="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+216 …" aria-invalid={errors.phone || undefined} className={cn(field(errors.phone), "rtl:text-right")} />
                      {errors.phone && <p id="phone-error" className={err}>{f.errPhone}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className={label}>{f.email}</label>
                      <input id="email" type="email" autoComplete="email" dir="ltr" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="nom@exemple.com" aria-invalid={errors.email || undefined} className={cn(field(errors.email), "rtl:text-right")} />
                      {errors.email && <p id="email-error" className={err}>{f.errEmail}</p>}
                    </div>
                    <div>
                      <label htmlFor="subject" className={label}>{f.subject}</label>
                      <select id="subject" value={form.subject} onChange={(e) => update("subject", e.target.value)} className={cn(field(), "cursor-pointer appearance-none")}>
                        <option value="">{f.subjectPh}</option>
                        {allServices.map((s) => (
                          <option key={s.t} value={s.t}>{s.t}</option>
                        ))}
                        <option value="other">{f.other}</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={label}>{f.message}</label>
                      <textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder={f.messagePh} aria-invalid={errors.message || undefined} className={cn(field(errors.message), "resize-none")} />
                      {errors.message && <p id="message-error" className={err}>{f.errMessage}</p>}
                    </div>
                  </div>
                  <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-[15px] font-bold text-white transition hover:bg-primary-700 sm:w-auto">
                    <WhatsApp className="h-5 w-5" />
                    {f.submit}
                  </button>
                  <button type="button" onClick={() => send("mail")} className="mt-4 block text-[13.5px] font-semibold text-primary underline underline-offset-4">
                    {f.submitMail}
                  </button>
                  <p className="mt-5 text-[12.5px] leading-relaxed text-muted">{f.note}</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
