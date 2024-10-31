import { render, screen } from '@testing-library/react';
import Home from '../page';

jest.mock('next/image', () => {
    return ({ src, alt, className }) => {
        return <img src={src} alt={alt} className={className} />
    };
});


describe('Home', () => {
    beforeEach(() => {
        render(<Home />);
    });

    test('renders home page', () => {
        expect(screen.getByText('Web Developer')).toBeInTheDocument();
    });

    test('renders background image with correct properties', () => {
        screen.debug(); // Outputs current state of the DOM
        const backgroundImgs = screen.getAllByAltText('background');

        expect(backgroundImgs.length).toBeGreaterThan(0);

        const backgroundImg = backgroundImgs[0]
        expect(backgroundImg).toBeInTheDocument();
        expect(backgroundImg).toHaveAttribute('src', '/images/background-blocks.svg');
        expect(backgroundImg).toHaveAttribute('class', expect.stringContaining('grayscale'));
    });

    test('renders button that links to code', () =>{
        const button = screen.getByRole('button', { name: /code/i });

        expect(button).toBeInTheDocument();
        const anchor = button.closest('a');
        expect(anchor).toHaveAttribute('href', 'https://github.com/ma-boles/flowmode/tree/main/my-nextjs-app');
        expect(anchor).toHaveAttribute('target', '_blank');
        expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders button that links to linkedin profile', () =>{
        const button = screen.getByAltText(/Link to LinkedIn Profile/i);

        expect(button).toBeInTheDocument();
        const anchor = button.closest('a');
        expect(anchor).toHaveAttribute('href', 'https://www.linkedin.com/in/mary-boles');
        expect(anchor).toHaveAttribute('target', '_blank');
        expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders button that links to github profile', () =>{
        const button = screen.getByAltText(/Link to GitHub Profile/i);

        expect(button).toBeInTheDocument();
        const anchor = button.closest('a');
        expect(anchor).toHaveAttribute('href', 'https://github.com/ma-boles');
        expect(anchor).toHaveAttribute('target', '_blank');
        expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('render connect link that navigate to the contact section', () =>{
        const link = screen.getByRole('link', { name: /connect/i });

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '#contact');

        const span = screen.getByText(/connect/i);
        expect(span).toBeInTheDocument();
    });
})