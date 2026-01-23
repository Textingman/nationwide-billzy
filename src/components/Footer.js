import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Our Office</h4>
            <p>4300 E. Sunset Road Ste D1<br />Henderson, NV 89014</p>
          </div>
          <div className="footer-section">
            <h4>Open Hours</h4>
            <p>
              Monday-Thursday: 7:00 – 17:00 PST<br />
              Friday: 6:00 – 16:00 PST<br />
              Holidays and weekends: Closed
            </p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              Phone: <a href="tel:888-331-9521">888-331-9521</a><br />
              Email: <a href="mailto:support@billzy1.com">support@billzy1.com</a>
            </p>
          </div>
        </div>
        <div className="footer-links">
          <Link href="/terms">Terms of Conditions</Link>
          <span>|</span>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2026 Billzy - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
