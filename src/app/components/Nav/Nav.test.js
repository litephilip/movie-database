import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from './Nav.jsx';

describe('Nav Component', () => {
  it('renders all navigation links with correct hrefs', () => {
    render(<Nav />);

    const search = screen.getByText('Search');
    const about = screen.getByText('About');
    const contact = screen.getByText('Contact');

    expect(search.closest('a')).toHaveAttribute('href', '/');
    expect(about.closest('a')).toHaveAttribute('href', '/about');
    expect(contact.closest('a')).toHaveAttribute('href', '/contact');
  });
});
