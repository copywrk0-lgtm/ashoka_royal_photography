import {site} from '@/data/site';

export function Footer(){
  return (
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
        <a className="footer-action footer-action-primary" href="mailto:hello@ashokaroyalphotography.com?subject=Wedding%20Photography%20Enquiry">
          <span className="footer-action-meta">START A CONVERSATION</span>
          <span className="footer-action-title">Quick Brief <span>↗</span></span>
        </a>

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
  );
}