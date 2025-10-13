import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Email: <Link href="mailto:databuddiessolutions@gmail.com">databuddiessolutions@gmail.com</Link>
            </p>
            <p>We respond within 24 hours</p>
          </div>
          <div className="footer-note">
            <p>
              Data Buddies Solutions was founded by AI automation specialists who left corporate tech
              to focus on helping small businesses harness the power of AI. We believe every business
              deserves access to cutting-edge automation, not just enterprise companies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
