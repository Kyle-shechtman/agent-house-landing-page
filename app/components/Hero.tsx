import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Your <span className="accent">Business Buddy</span> That Never Sleeps
            </h1>
            <p className="subtitle">
              We build AI agents that handle your workflows so you can focus on what matters
            </p>
            <Link
              href="https://cal.com/kyle-shechtman-7ydquo/15min?overlayCalendar=true"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Demo
            </Link>
          </div>
          <div className="hero-image">
            <Image
              src="/hero-isometric-removebg-preview.png"
              alt="AI assistant helping with business workflows"
              width={700}
              height={700}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
