'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link href="/">
              <Image src="/logo.svg" alt="Billzy Logo" width={150} height={50} />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link href="/" className={pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/request-consultation" className={pathname === '/request-consultation' ? 'active' : ''}>
                Request Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
