import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'; // Import the Footer component

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  const navOptions = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/uses', label: 'Uses' }
  ];

  // Define the links to be displayed in the footer
  const footerLinks = [
    { title: 'GitHub', url: 'https://github.com' },
    { title: 'LinkedIn', url: 'https://linkedin.com' },
    { title: 'Twitter', url: 'https://twitter.com' },
    // Add more links as needed
  ];

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar options={navOptions} /> {/* Navbar component */}
        {children}
        <Footer links={footerLinks} /> {/* Add Footer component, passing the links */}
      </body>
    </html>
  );
}
