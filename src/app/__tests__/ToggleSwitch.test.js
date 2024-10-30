import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import ToggleSwitch from '../components/ToggleSwitch';

// Mocking the `document.documentElement.classList`
beforeEach(() => {
    document.documentElement.classList.remove('dark', 'light');
});

describe('ToggleSwitch', () => {
    test('initially applies the "dark" class to document', () => {
        render (<ToggleSwitch />);

        expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    test('toggles between "dark" and "light" classes on toggle switch click', () => {
        render(<ToggleSwitch />);

        // FInd the checkbox input for toggling
        const toggleInput = screen.getByRole('checkbox');

        // First click: should switch to light mode
        fireEvent.click(toggleInput);
        console.log(document.documentElement.classList); // Debugging
        expect(document.documentElement.classList.contains('light')).toBe(true);
        expect(document.documentElement.classList.contains('dark')).toBe(false);

        // Second click: should switch back to dark mode
        fireEvent.click(toggleInput);
        console.log(document.documentElement.classList); // Debugging
        expect(document.documentElement.classList.contains('dark')).toBe(true);
        expect(document.documentElement.classList.contains('light')).toBe(false);
    

    });

    test('calls the onToggle callback when toggled', () => {
        const onToggleMock = jest.fn();
        render(<ToggleSwitch onToggle={onToggleMock} />);

        // Toggle the switch
        const toggleInput = screen.getByRole('checkbox');
        fireEvent.click(toggleInput);

        // Verify callback was called
        expect(onToggleMock).toHaveBeenCalled();
    });
});