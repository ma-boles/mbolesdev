import { render, screen } from '@testing-library/react';
import SmallNav from '../components/SmallNav';

describe('SmallNav', () => {
    beforeEach(() => {
        render(<SmallNav />);
    });

    test('renders all navigation buttons with correct text', () => {
        const aboutButton = screen.getByRole('button', { name: /about/i });
        const worksButton = screen.getByRole('button', { name: /works/i });
        const contactButton = screen.getByRole('button', { name: /contact/i });

        expect(aboutButton).toBeInTheDocument();
        expect(worksButton).toBeInTheDocument();
        expect(contactButton).toBeInTheDocument();
    });

    test('buttons have correct href attributes', () => {
        const aboutLink = screen.getByRole('link', { name: /about/i });
        const worksLink = screen.getByRole('link', { name: /works/i });
        const contactLink = screen.getByRole('link', { name: /contact/i});

        expect(aboutLink).toHaveAttribute('href', '#about');
        expect(worksLink).toHaveAttribute('href', '#workst');
        expect(contactLink).toHaveAttribute('href', '#contact');
    });

    test('buttons contain correct class names for styles', () => {
        const aboutButton = screen.getByRole('button', { name: /about/i });
        const worksButton = screen.getByRole('button', { name: /works/i });
        const contactButton = screen.getByRole('button', { name: /contact/i });

        expect(aboutButton).toHaveClass("custom-nav w-full hover:bg-gray-700 text-center dark:hover:bg-purple-600");
        expect(worksButton).toHaveClass("custom-nav w-full hover:bg-gray-700 text-center dark:hover:bg-purple-600");
        expect(contactButton).toHaveClass("custom-nav w-full hover:bg-gray-700 text-center dark:hover:bg-purple-600");
    });

    test('applies additional className prop to wrapper div', () => {
        const customClass = 'test-class';
        render(<SmallNav className={customClass} />);
        const wrapperDiv = screen.getByRole('navigation', { hidden: true });

        expect(wrapperDiv).toHaveClass(customClass);
    });
});