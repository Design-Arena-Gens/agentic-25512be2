import './globals.css';

export const metadata = {
  title: 'MAN 36/48 Common Rail ? Step-by-Step Guide',
  description: 'Clear explanation of MAN 36/48 marine diesel common-rail fuel system: components, purposes, and working sequence.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <h1>MAN 36/48 Common Rail ? Step-by-Step</h1>
            <nav>
              <a href="#overview">Overview</a>
              <a href="#components">Components</a>
              <a href="#flow">How It Works</a>
              <a href="#controls">Control & Safety</a>
              <a href="#ops">Operation & Checks</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>For training use ? simplified technical overview.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
