import Link from 'next/link';
import './Nav.css';

export default function Nav() {

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/">Search</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
