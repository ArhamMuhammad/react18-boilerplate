import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
// import '@testing-library/jest-dom/extend-expect';
import Notification from '../Notification';
import theme from '../../styles/theme';

describe('Notification component', () => {
    const mockOnClose = jest.fn();

    const renderNotification = (message, type) =>
        render(
            <ThemeProvider theme={theme}>
                <Notification
                    message={message}
                    type={type}
                    onClose={mockOnClose}
                />
            </ThemeProvider>
        );

    afterEach(() => {
        mockOnClose.mockClear();
    });

    test('renders success notification with message', () => {
        renderNotification('Success message', 'success');
        expect(screen.getByText('Success message')).toBeInTheDocument();
        expect(screen.getByTestId('notification-wrapper')).toHaveStyle(
            `background-color: ${theme.colors.success}`
        );
    });

    test('renders error notification with message', () => {
        renderNotification('Error message', 'error');
        expect(screen.getByText('Error message')).toBeInTheDocument();
        expect(screen.getByTestId('notification-wrapper')).toHaveStyle(
            `background-color: ${theme.colors.error}`
        );
    });

    test('renders warning notification with message', () => {
        renderNotification('Warning message', 'warning');
        expect(screen.getByText('Warning message')).toBeInTheDocument();
        expect(screen.getByTestId('notification-wrapper')).toHaveStyle(
            `background-color: ${theme.colors.warning}`
        );
    });

    test('renders default notification when type is not provided', () => {
        renderNotification('Default message');
        expect(screen.getByText('Default message')).toBeInTheDocument();
        const notificationWrapper = screen.getByTestId('notification-wrapper');
        expect(notificationWrapper).toHaveStyle(
            'background-color: rgb(51, 51, 51)'
        );
    });

    test('does not render when message is empty', () => {
        const { container } = renderNotification('');
        expect(container).toBeEmptyDOMElement();
    });

    test('calls onClose when close button is clicked', () => {
        renderNotification('Closable message', 'success');
        fireEvent.click(screen.getByText('×'));
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
