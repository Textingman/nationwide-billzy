import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Billzy - Financial Services Excellence',
  description: 'Licensed independent financial services company operating nationwide with expertise in acquiring and managing non-performing portfolios',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
