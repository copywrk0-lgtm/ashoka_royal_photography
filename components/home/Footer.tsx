"use client";

import {FormEvent, useState} from 'react';
import {site} from '@/data/site';

export function Footer(){
  const [briefOpen, setBriefOpen] = useState(false);

  function submitBrief(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Wedding enquiry — ${data.get('name') || 'New enquiry'}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Event: ${data.get('event') || ''}`,
      `Date: ${data.get('date') || ''}`,
      `City / Venue: ${data.get('city') || ''}`,
      '',
      `Tell us more: ${data.get('message') || ''}`,
    ].join('\\n');

    window.location.href = `mailto:hello@ashokaroyalphotography.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <footer id="contact" className="footer">
        <div className="footer-intro">
          <p className="eyebrow">06 — YOUR STORY, NEXT?</p>
          <h2>Let&apos;s make<br/><em>it unforgettable.</em></h2>
          <p className="footer-lede">
            Tell us what you&apos;re planning. We&apos;ll take it from there — quietly,
            thoughtfully, frame by frame.
          </p>
        </div>

        <div className="footer-actions">
          <button className="footer-action footer-action-primary" type="button" onClick={() => setBriefOpen(true)}>
            <span className="footer-action-meta">START A CONVERSATION</span>
            <span className="footer-action-title">Quick Brief <span>↗</span></span>
          </button>

          <a className="footer-action" href="mailto:hello@ashokaroyalphotography.com">
            <span className="footer-action-meta">MAIL US</span>
            <span className="footer-action-title">hello@ashokaroyalphotography.com</span>
          </a>

          <a className="footer-action" href="tel:+919878919630">
            <span className="footer-action-meta">CALL US</span>
            <span className="footer-action-title">{site.phone}</span>
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ASHOKA ROYAL PHOTOGRAPHY</span>
          <span>{site.location}</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>

      {briefOpen && (
        <div className="brief-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setBriefOpen(false)}>
          <section className="brief-modal" role="dialog" aria-modal="true" aria-labelledby="brief-title">
            <button className="brief-close" type="button" onClick={() => setBriefOpen(false)} aria-label="Close form">CLOSE ×</button>

            <div className="brief-heading">
              <p className="eyebrow">QUICK BRIEF · 01</p>
              <h3 id="brief-title">Tell us about<br/><em>your day.</em></h3>
              <p>Just the essentials. We&apos;ll get back to you with the next step.</p>
            </div>

            <form className="brief-form" onSubmit={submitBrief}>
              <label><span>YOUR NAME</span><input name="name" required placeholder="Your name" /></label>
              <label><span>EMAIL</span><input name="email" type="email" required placeholder="you@example.com" /></label>
              <label><span>PHONE</span><input name="phone" type="tel" placeholder="+91 ..." /></label>
              <label><span>EVENT</span><input name="event" placeholder="Wedding / Engagement / Other" /></label>
              <label><span>DATE</span><input name="date" type="date" /></label>
              <label><span>CITY / VENUE</span><input name="city" placeholder="Delhi / Jaipur / ..." /></label>
              <label className="brief-full"><span>YOUR STORY</span><textarea name="message" rows={4} placeholder="Tell us anything useful — guest count, vibe, venue, what you have in mind..." /></label>
              <div className="brief-submit-row">
                <button className="brief-submit" type="submit">SEND ENQUIRY <span>↗</span></button>
                <p>Opens your email app with everything filled in.</p>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
}