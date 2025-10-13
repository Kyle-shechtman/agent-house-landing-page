import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <div className="logo-icon">DB</div>
          <span>Data Buddies Solutions</span>
        </div>
        <nav>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
