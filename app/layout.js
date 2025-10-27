import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal Portfolio built with Next.js 13',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
