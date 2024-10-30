import { render, screen, fireEvent } from '@testing-library/react';
import BackToTopButton from '../components/BackToTopButton';

describe('BackToTopButton', () => {
    beforeEach(() => {
        // Reset any scroll position before each test
        window.scrollTo = jest.fn();
        Object.defineProperty(window, 'scrollY', { writable: true, value:0 });
    });

    test('button is not visible initially', () => {
        render(<BackToTopButton />);
        expect(screen.queryByRole('button')).toBeNull(); // Button should not be in the document initially
    });

    test('button becomes visible when scrolled down', () => {
        render(<BackToTopButton />);

        // Simulate scrolling down past 300px
        window.scrollY = 350;
        fireEvent.scroll(window);

        // Now the button should be visile
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('button hides when scrolled down', () => {
        render(<BackToTopButton />);

        // Scroll down to the show the button
        window.scrollY = 350;
        fireEvent.scroll(window);
        expect(screen.getByRole('button')).toBeInTheDocument();

        // Scroll up to hide the button
        window.scrollY = 0;
        fireEvent.scroll(window);
        expect(screen.queryByRole('button')).toBeNull();
    });

    test('button scrolls to the top when clicked', () => {
        render(<BackToTopButton />);

        // Make button visible by scrolling down
        window.scrollY = 350;
        fireEvent.scroll(window);

        // Click the button
        const button = screen.getByRole('button');
        fireEvent.click(button);

        // Ensure window.scrollTo was called with the correct parameters
        expect(window.scrollTo).toHaveBeenCalledWith({
            top:0,
            behavior: 'smooth',
        });
    });
});
