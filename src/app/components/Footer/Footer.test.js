import { render } from '@testing-library/react';
import Footer from './Footer.jsx';

describe('Footer Component', () => {
    it('renders the correct year in the paragraph', () => {
        const currentYear = new Date().getFullYear();

        render(<Footer />);
        
        const { container } = render(<Footer />);

        const footerParagraph = container.querySelector('.footer p');
        expect(footerParagraph.textContent).toContain(`© ${currentYear} Movie Database`);
    });
});