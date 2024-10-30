import { render, screen, fireEvent } from '@testing-library/react';
import ProjectDetails from '../components/ProjectDetails';

describe('ProjectDetails', () => {
    test('renders project details', () => {
        render(<ProjectDetails />);

        // Click the "Show More" button if "Features" is behind it
        const showMoreButton = screen.getByText('Show More');
        fireEvent.click(showMoreButton);

        expect(screen.getByText(/features/i)).toBeInTheDocument();
    });
});