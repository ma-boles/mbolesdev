import { render, screen } from '@testing-library/react';
import LargeNav from '../components/LargeNav';

describe('LargeNav', () => {
    test('renders all navigation buttons with correct text', () => {
        render(<LargeNav />);

        const aboutButton = screen.getByRole('button', { name: /about/i });
        const worksButton = screen.getByRole('button', { name: /view works/i });
        const contactButton = screen.getByRole('button', { name: /get in touch/i });

        expect(aboutButton).toBeInTheDocument();
        expect(worksButton).toBeInTheDocument();
        expect(contactButton).toBeInTheDocument();
    });

    test('buttons have correct href attributes', () => {
        render(<LargeNav />);

        const aboutLink = screen.getByRole('link', { name: /about/i });
        const worksLink = screen.getByRole('link', { name: /view works/i });
        const contactLink = screen.getByRole('link', { name: /get in touch/i});

        expect(aboutLink).toHaveAttribute('href', '#about');
        expect(worksLink).toHaveAttribute('href', '#works');
        expect(contactLink).toHaveAttribute('href', '#contact');
    });

    test('buttons contain correct class names for styles', () => {
        render(<LargeNav />);

        const aboutButton = screen.getByRole('button', { name: /about/i });
        const worksButton = screen.getByRole('button', { name: /view works/i });
        const contactButton = screen.getByRole('button', { name: /get in touch/i });

        expect(aboutButton).toHaveClass("custom-button bg-gray-800 border-gray-800");
        expect(worksButton).toHaveClass("custom-button bg-gray-600 border-gray-600");
        expect(contactButton).toHaveClass("custom-button border-2 border-white");
    });

    test('it applies the custom class', () => {
        const customClass = 'test-class';
        render(<LargeNav className={customClass} />); // Pass className prop
    
        const wrapperDiv = screen.getByTestId('large-nav'); // Get the element by test ID
        expect(wrapperDiv).toHaveClass('hidden', 'md:flex', 'flex-col', 'gap-2', 'm-4', customClass);
    });
});
