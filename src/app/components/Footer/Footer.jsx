import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Moviie Database</p>
      <p>Created by Philip Gistedt</p>
    </footer>
  );
}
