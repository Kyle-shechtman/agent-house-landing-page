import Link from 'next/link';

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Get Your Business Buddy?</h2>
        <div className="cta-buttons">
          <Link
            href="https://cal.com/kyle-shechtman-7ydquo/15min?overlayCalendar=true"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </Link>
          <Link
            href="mailto:databuddiessolutions@gmail.com"
            className="btn-secondary"
          >
            Email us
          </Link>
        </div>
      </div>
    </section>
  );
}
