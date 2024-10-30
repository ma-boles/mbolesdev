import { render, screen, within } from '@testing-library/react';
import SmallNav from '../components/SmallNav';

describe('SmallNav', () => {
    test('renders all navigation buttons with correct text', () => {
        render(<SmallNav />);

        const aboutLink = screen.getByRole('link', { name: /about/i });
        const worksLink = screen.getByRole('link', { name: /works/i });
        const contactLink = screen.getByRole('link', { name: /contact/i });

        // Check each link contains a button with correct text
        expect(within(aboutLink).getByRole('button', { name: /about/i })).toBeInTheDocument();
        expect(within(worksLink).getByRole('button', { name: /works/i })).toBeInTheDocument();
        expect(within(contactLink).getByRole('button', { name: /contact/i })).toBeInTheDocument();
    });

    test('links have correct href attributes', () => {
        render(<SmallNav />);

        const aboutLink = screen.getByRole('link', { name: /about/i });
        const worksLink = screen.getByRole('link', { name: /works/i });
        const contactLink = screen.getByRole('link', { name: /contact/i});

        expect(aboutLink).toHaveAttribute('href', '#about');
        expect(worksLink).toHaveAttribute('href', '#works');
        expect(contactLink).toHaveAttribute('href', '#contact');
    });

    test('button inside links contain correct class names for styles', () => {
        render(<SmallNav />);

        const aboutButton = within(screen.getByRole('link', { name: /about/i })).getByRole('button');
        const worksButton = within(screen.getByRole('link', { name: /works/i })).getByRole('button');
        const contactButton = within(screen.getByRole('link', { name: /contact/i })).getByRole('button');

        expect(aboutButton).toHaveClass("custom-nav w-full hover:bg-gray-700 text-center dark:hover:bg-purple-600");
        expect(worksButton).toHaveClass("custom-nav w-full hover:bg-gray-700 text-center dark:hover:bg-purple-600");
        expect(contactButton).toHaveClass("custom-nav w-full hover:bg-gray-700 text-center dark:hover:bg-purple-600");
    });

    it('applies additional className prop to wrapper div', () => {
        const customClass = 'test-class';
        render(<SmallNav className={customClass} />);
        
        // Get all elements with the test ID
        const navElements = screen.getAllByTestId('small-nav');
        
        // Assuming you want to test the first instance
        const wrapperDiv = navElements[0];
        
        expect(wrapperDiv).toHaveClass(customClass);
    });
});
