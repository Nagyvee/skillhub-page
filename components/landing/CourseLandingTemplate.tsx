"use client";

import { useState } from "react";
import type { LandingPageData } from "../../lib/landing-pages-data";

interface Props {
  data: LandingPageData;
}

export function CourseLandingTemplate({ data }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    number: "",
    companyName: "",
    country: "South Africa",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          type: "proc-landing",
          courseOrEventName: data.title,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at hello@skillhub.africa");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="lp-root">

      {/* HERO */}
      <section className="lp-hero">
        {data.heroImage && (
          <div className="lp-hero-img">
            <img src={data.heroImage} alt={data.title} />
          </div>
        )}
        <div className="lp-hero-inner">
          <div className="lp-wordmark">
            <span className="lp-wordmark-sh">SkillHub</span>
            <span className="lp-wordmark-intl">International</span>
            <span className="lp-wordmark-dot">·</span>
            <span className="lp-wordmark-badge">{data.subtitle}</span>
          </div>
          <h1 className="lp-hero-h1">{data.heroHook}</h1>
          <p className="lp-hero-sub">{data.heroSub}</p>
          <div className="lp-stats">
            {data.stats.map((s) => (
              <div className="lp-stat" key={s.label}>
                <span className="lp-stat-value">{s.value}</span>
                <span className="lp-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <a href="#enquire" className="lp-cta-btn">{data.ctaLabel}</a>
          <p className="lp-hero-meta">{data.duration} · {data.location} · {data.date}</p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="lp-section lp-section--light">
        <div className="lp-container">
          <p className="lp-eyebrow">The Problem</p>
          <h2 className="lp-h2">{data.problemHeading}</h2>
          <p className="lp-body-lg">{data.problemBody}</p>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="lp-section lp-section--dark">
        <div className="lp-container">
          <p className="lp-eyebrow lp-eyebrow--gold">The Transformation</p>
          <h2 className="lp-h2 lp-h2--white">{data.transformationHeading}</h2>
          <ul className="lp-transform-list">
            {data.transformationPoints.map((pt) => (
              <li key={pt} className="lp-transform-item">
                <span className="lp-check">✓</span>{pt}
              </li>
            ))}
          </ul>
          <a href="#enquire" className="lp-cta-btn lp-cta-btn--outline">{data.ctaLabel}</a>
        </div>
      </section>

      {/* MODULES */}
      <section className="lp-section lp-section--light">
        <div className="lp-container">
          <p className="lp-eyebrow">Programme Structure</p>
          <h2 className="lp-h2">A Clear Path Through {data.duration}.</h2>
          <div className="lp-modules">
            {data.modules.map((mod, i) => (
              <div className="lp-module" key={mod.title}>
                <div className="lp-module-number">{String(i + 1).padStart(2, "0")}</div>
                <div className="lp-module-body">
                  <p className="lp-module-week">{mod.week}</p>
                  <h3 className="lp-module-title">{mod.title}</h3>
                  <ul className="lp-module-topics">
                    {mod.topics.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <a href="#enquire" className="lp-cta-btn">{data.ctaLabel}</a>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="lp-section lp-section--navy">
        <div className="lp-container">
          <p className="lp-eyebrow lp-eyebrow--gold">Who It's For</p>
          <h2 className="lp-h2 lp-h2--white">Is This You?</h2>
          <div className="lp-who-grid">
            <div className="lp-who-col">
              <h3 className="lp-who-heading lp-who-heading--yes">Built for you if:</h3>
              <ul className="lp-who-list">
                {data.whoFor.map((w) => (
                  <li key={w}><span className="lp-check">✓</span>{w}</li>
                ))}
              </ul>
            </div>
            <div className="lp-who-col">
              <h3 className="lp-who-heading lp-who-heading--no">Not for you if:</h3>
              <ul className="lp-who-list lp-who-list--no">
                {data.whoNot.map((w) => (
                  <li key={w}><span className="lp-x">✕</span>{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="lp-section lp-section--light">
        <div className="lp-container">
          <p className="lp-eyebrow">What You Get</p>
          <h2 className="lp-h2">Everything Included. Nothing Hidden.</h2>
          <ul className="lp-outcomes">
            {data.outcomes.map((o) => (
              <li key={o} className="lp-outcome-item">
                <span className="lp-outcome-icon">◆</span>{o}
              </li>
            ))}
          </ul>
          <div className="lp-price-block">
            <p className="lp-price-label">Investment</p>
            <p className="lp-price-value">{data.price}</p>
          </div>
          <a href="#enquire" className="lp-cta-btn">{data.ctaLabel}</a>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="lp-section lp-section--dark" id="enquire">
        <div className="lp-container lp-container--narrow">
          <p className="lp-eyebrow lp-eyebrow--gold">Enquire Now</p>
          <h2 className="lp-h2 lp-h2--white">Reserve Your Seat on {data.title}.</h2>
          <p className="lp-form-sub">Fill in your details and our team will contact you within one business day.</p>

          {submitted ? (
            <div className="lp-form-success">
              <span className="lp-form-success-icon">✓</span>
              <h3>Enquiry Received!</h3>
              <p>Thank you for your interest in <strong>{data.title}</strong>. Our team will be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lp-form">
              <div className="lp-form-row">
                <div className="lp-form-group">
                  <label className="lp-form-label">Full Name *</label>
                  <input
                    className="lp-form-input"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="lp-form-group">
                  <label className="lp-form-label">Email Address *</label>
                  <input
                    className="lp-form-input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="lp-form-row">
                <div className="lp-form-group">
                  <label className="lp-form-label">Phone Number *</label>
                  <input
                    className="lp-form-input"
                    type="tel"
                    name="number"
                    placeholder="+27 XX XXX XXXX"
                    value={formState.number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="lp-form-group">
                  <label className="lp-form-label">Organisation</label>
                  <input
                    className="lp-form-input"
                    type="text"
                    name="companyName"
                    placeholder="Your company or organisation"
                    value={formState.companyName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="lp-form-group">
                <label className="lp-form-label">Message (optional)</label>
                <textarea
                  className="lp-form-input lp-form-textarea"
                  name="message"
                  placeholder="Any specific questions or requirements?"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              {error && <p className="lp-form-error">{error}</p>}

              <button type="submit" className="lp-cta-btn lp-cta-btn--gold" disabled={submitting}>
                {submitting ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="lp-section lp-section--mid">
        <div className="lp-container lp-container--narrow">
          <p className="lp-eyebrow">Questions</p>
          <h2 className="lp-h2">Common Questions, Answered.</h2>
          <div className="lp-faq">
            {data.faqs.map((faq, i) => (
              <div key={i} className={`lp-faq-item ${openFaq === i ? "lp-faq-item--open" : ""}`}>
                <button
                  className="lp-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className="lp-faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className="lp-faq-a">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lp-section lp-section--dark lp-final-cta">
        <div className="lp-container lp-container--center">
          <p className="lp-eyebrow lp-eyebrow--gold">Apply Now</p>
          <h2 className="lp-h2 lp-h2--white">{data.duration}. {data.location}. {data.date}.</h2>
          <p className="lp-final-sub">
            Seats are limited. Organisations across Africa invest in SkillHub programmes
            because the skills transfer is real — and the accreditation is recognised.
          </p>
          <div className="lp-final-stats">
            {data.stats.map((s) => (
              <div className="lp-final-stat" key={s.label}>
                <span className="lp-final-stat-value">{s.value}</span>
                <span className="lp-final-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <a href="#enquire" className="lp-cta-btn lp-cta-btn--gold">{data.ctaLabel}</a>
          <p className="lp-final-contact">
            Questions? Email{" "}
            <a href="mailto:hello@skillhub.africa" className="lp-link">hello@skillhub.africa</a>
            {" "}or call{" "}
            <a href="tel:+27645158024" className="lp-link">+27 64 515 8024</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        <p>© {new Date().getFullYear()} SkillHub International · QCTO-Accredited Provider · Nelson Mandela Square, Sandton, Johannesburg</p>
        <p>
          <a href="https://www.skillhub.africa" className="lp-link">www.skillhub.africa</a>
          {" · "}
          <a href="mailto:hello@skillhub.africa" className="lp-link">hello@skillhub.africa</a>
        </p>
      </footer>

      <style jsx global>{`
        .lp-root { font-family: "Inter", system-ui, sans-serif; color: #1a1a2e; background: #fff; line-height: 1.6; -webkit-font-smoothing: antialiased; }
        .lp-container { max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }
        .lp-container--narrow { max-width: 720px; }
        .lp-container--center { text-align: center; }
        .lp-section { padding: 5rem 0; }
        .lp-section--light { background: #f8f9fb; }
        .lp-section--mid { background: #eef0f4; }
        .lp-section--dark { background: #0f1a2e; }
        .lp-section--navy { background: #0d1526; }

        .lp-hero { background: linear-gradient(160deg, #0f1a2e 0%, #162038 60%, #1a2844 100%); padding: 4.5rem 0 5rem; position: relative; overflow: hidden; }
        .lp-hero::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse at 70% 50%, rgba(212,162,78,0.08) 0%, transparent 60%); pointer-events: none; z-index: 0; }
        .lp-hero-img { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
        .lp-hero-img img { width: 100%; height: 100%; object-fit: cover; opacity: 0.15; }
        .lp-hero-inner { max-width: 860px; margin: 0 auto; padding: 0 1.5rem; position: relative; z-index: 1; }

        .lp-wordmark { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2.5rem; flex-wrap: wrap; }
        .lp-wordmark-sh { font-family: "Fraunces", Georgia, serif; font-size: 1.1rem; font-weight: 700; color: #fff; letter-spacing: 0.02em; }
        .lp-wordmark-intl { font-size: 0.9rem; color: rgba(255,255,255,0.6); }
        .lp-wordmark-dot { color: #d4a24e; }
        .lp-wordmark-badge { font-size: 0.75rem; background: rgba(212,162,78,0.15); color: #d4a24e; border: 1px solid rgba(212,162,78,0.3); padding: 0.2rem 0.6rem; border-radius: 2rem; letter-spacing: 0.05em; text-transform: uppercase; }

        .lp-hero-h1 { font-family: "Fraunces", Georgia, serif; font-size: clamp(2rem, 5vw, 3.4rem); font-weight: 700; color: #fff; line-height: 1.15; margin: 0 0 1.25rem; letter-spacing: -0.02em; }
        .lp-hero-sub { font-size: clamp(1rem, 2vw, 1.2rem); color: rgba(255,255,255,0.75); max-width: 640px; margin: 0 0 2.5rem; }

        .lp-stats { display: flex; flex-wrap: wrap; gap: 1.5rem 2.5rem; margin-bottom: 2.5rem; }
        .lp-stat { display: flex; flex-direction: column; gap: 0.2rem; }
        .lp-stat-value { font-family: "Fraunces", Georgia, serif; font-size: 1.4rem; font-weight: 700; color: #d4a24e; line-height: 1; }
        .lp-stat-label { font-size: 0.78rem; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.07em; }

        .lp-cta-btn { display: inline-block; background: #d4a24e; color: #0f1a2e; font-weight: 700; font-size: 1rem; padding: 0.9rem 2.2rem; border-radius: 4px; text-decoration: none; letter-spacing: 0.02em; transition: background 0.2s, transform 0.15s; border: none; cursor: pointer; }
        .lp-cta-btn:hover { background: #c49040; transform: translateY(-1px); }
        .lp-cta-btn--outline { background: transparent; color: #d4a24e; border: 2px solid #d4a24e; }
        .lp-cta-btn--outline:hover { background: rgba(212,162,78,0.1); }
        .lp-cta-btn--gold { font-size: 1.05rem; padding: 1rem 2.5rem; }
        .lp-cta-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

        .lp-hero-meta { margin-top: 1rem; font-size: 0.85rem; color: rgba(255,255,255,0.45); letter-spacing: 0.03em; }

        .lp-eyebrow { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #8a96aa; margin: 0 0 0.75rem; }
        .lp-eyebrow--gold { color: #d4a24e; }
        .lp-h2 { font-family: "Fraunces", Georgia, serif; font-size: clamp(1.6rem, 3.5vw, 2.5rem); font-weight: 700; color: #0f1a2e; line-height: 1.2; margin: 0 0 1.5rem; letter-spacing: -0.01em; }
        .lp-h2--white { color: #fff; }
        .lp-body-lg { font-size: 1.1rem; color: #3a4558; max-width: 680px; line-height: 1.75; }

        .lp-transform-list { list-style: none; padding: 0; margin: 0 0 2.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; }
        .lp-transform-item { display: flex; gap: 0.75rem; color: rgba(255,255,255,0.85); font-size: 1rem; align-items: flex-start; line-height: 1.5; }
        .lp-check { color: #d4a24e; font-weight: 700; flex-shrink: 0; margin-top: 0.1rem; }
        .lp-x { color: rgba(255,255,255,0.35); font-weight: 700; flex-shrink: 0; margin-top: 0.1rem; }

        .lp-modules { display: flex; flex-direction: column; border-left: 2px solid #d4a24e; margin-bottom: 3rem; }
        .lp-module { display: flex; gap: 1.5rem; padding: 1.75rem 0 1.75rem 2rem; position: relative; }
        .lp-module:not(:last-child) { border-bottom: 1px solid #e2e6ed; }
        .lp-module::before { content: ""; position: absolute; left: -5px; top: 2rem; width: 8px; height: 8px; background: #d4a24e; border-radius: 50%; }
        .lp-module-number { font-family: "Fraunces", Georgia, serif; font-size: 1.6rem; font-weight: 700; color: #d4a24e; opacity: 0.5; flex-shrink: 0; line-height: 1; width: 2.5rem; }
        .lp-module-week { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #8a96aa; margin: 0 0 0.3rem; }
        .lp-module-title { font-family: "Fraunces", Georgia, serif; font-size: 1.15rem; font-weight: 600; color: #0f1a2e; margin: 0 0 0.75rem; }
        .lp-module-topics { margin: 0; padding: 0 0 0 1rem; color: #4a5568; font-size: 0.9rem; line-height: 1.8; }

        .lp-who-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
        .lp-who-heading { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 1rem; }
        .lp-who-heading--yes { color: #d4a24e; }
        .lp-who-heading--no { color: rgba(255,255,255,0.35); }
        .lp-who-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
        .lp-who-list li { display: flex; gap: 0.6rem; font-size: 0.95rem; color: rgba(255,255,255,0.8); align-items: flex-start; line-height: 1.5; }
        .lp-who-list--no li { color: rgba(255,255,255,0.4); }

        .lp-outcomes { list-style: none; padding: 0; margin: 0 0 3rem; display: flex; flex-direction: column; gap: 1rem; }
        .lp-outcome-item { display: flex; gap: 1rem; align-items: flex-start; font-size: 1rem; color: #2d3748; line-height: 1.6; }
        .lp-outcome-icon { color: #d4a24e; font-size: 0.6rem; flex-shrink: 0; margin-top: 0.45rem; }

        .lp-price-block { background: #0f1a2e; color: white; border-radius: 6px; padding: 1.5rem 2rem; display: inline-flex; flex-direction: column; gap: 0.25rem; margin-bottom: 2rem; }
        .lp-price-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #d4a24e; margin: 0; }
        .lp-price-value { font-family: "Fraunces", Georgia, serif; font-size: 1.4rem; font-weight: 700; color: white; margin: 0; }

        .lp-form-sub { color: rgba(255,255,255,0.6); font-size: 1rem; margin: 0 0 2rem; }
        .lp-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .lp-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .lp-form-group { display: flex; flex-direction: column; gap: 0.4rem; }
        .lp-form-label { font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.06em; }
        .lp-form-input { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; padding: 0.8rem 1rem; font-size: 0.95rem; color: #fff; font-family: inherit; transition: border-color 0.2s; outline: none; width: 100%; box-sizing: border-box; }
        .lp-form-input::placeholder { color: rgba(255,255,255,0.3); }
        .lp-form-input:focus { border-color: #d4a24e; background: rgba(255,255,255,0.1); }
        .lp-form-textarea { resize: vertical; min-height: 100px; }
        .lp-form-error { color: #f87171; font-size: 0.9rem; padding: 0.75rem 1rem; background: rgba(248,113,113,0.1); border-radius: 4px; border: 1px solid rgba(248,113,113,0.3); }
        .lp-form-success { background: rgba(212,162,78,0.1); border: 1px solid rgba(212,162,78,0.3); border-radius: 8px; padding: 2.5rem; text-align: center; }
        .lp-form-success-icon { font-size: 2.5rem; color: #d4a24e; display: block; margin-bottom: 1rem; }
        .lp-form-success h3 { font-family: "Fraunces", Georgia, serif; font-size: 1.5rem; color: #fff; margin: 0 0 0.75rem; }
        .lp-form-success p { color: rgba(255,255,255,0.7); margin: 0; }
        .lp-form-success strong { color: #d4a24e; }

        .lp-faq { display: flex; flex-direction: column; border-top: 1px solid #cdd2db; margin-top: 1rem; }
        .lp-faq-item { border-bottom: 1px solid #cdd2db; }
        .lp-faq-q { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 0; font-size: 1rem; font-weight: 600; color: #0f1a2e; text-align: left; gap: 1rem; line-height: 1.4; font-family: inherit; }
        .lp-faq-item--open .lp-faq-q { color: #d4a24e; }
        .lp-faq-icon { font-size: 1.2rem; flex-shrink: 0; color: #d4a24e; font-weight: 300; }
        .lp-faq-a { padding: 0 0 1.25rem; color: #4a5568; font-size: 0.95rem; line-height: 1.75; margin: 0; }

        .lp-final-cta { padding: 6rem 0; }
        .lp-final-sub { color: rgba(255,255,255,0.65); font-size: 1.05rem; max-width: 580px; margin: 0 auto 2.5rem; line-height: 1.7; }
        .lp-final-stats { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem 3rem; margin-bottom: 3rem; }
        .lp-final-stat { display: flex; flex-direction: column; gap: 0.2rem; text-align: center; }
        .lp-final-stat-value { font-family: "Fraunces", Georgia, serif; font-size: 1.5rem; font-weight: 700; color: #d4a24e; line-height: 1; }
        .lp-final-stat-label { font-size: 0.75rem; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.07em; }
        .lp-final-contact { margin-top: 1.5rem; font-size: 0.9rem; color: rgba(255,255,255,0.45); }

        .lp-link { color: #d4a24e; text-decoration: none; }
        .lp-link:hover { text-decoration: underline; }

        .lp-footer { background: #080f1a; padding: 2.5rem 1.5rem; text-align: center; font-size: 0.82rem; color: rgba(255,255,255,0.3); display: flex; flex-direction: column; gap: 0.5rem; }

        @media (max-width: 640px) {
          .lp-section { padding: 3.5rem 0; }
          .lp-module { padding-left: 1.25rem; }
          .lp-transform-list { grid-template-columns: 1fr; }
          .lp-who-grid { grid-template-columns: 1fr; }
          .lp-form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}