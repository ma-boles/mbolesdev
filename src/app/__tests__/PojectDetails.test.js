import { render, screen } from '@testing-library/react';
import ProjectDetails from '../components/ProjectDetails';

describe('ProjectDetails', () => {
    beforeEach(() => {
        render(<ProjectDetails />);
    });

    test('renders project details', () => {
        expect(screen.getByText('Features')).toBeInTheDocument();
    });
    
});