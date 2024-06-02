import React from 'react';
import {
    render,
    screen,
    fireEvent,
    act,
    waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from '../styles/theme';
import App from '../App';

describe('App component', () => {
    const renderApp = () =>
        render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        );

    test('renders Gen1Pokemon component on default route', () => {
        renderApp();
        expect(screen.getByText(/Gen 1 Pokemon/i)).toBeInTheDocument();
    });

    test('renders RandomPokemon component on /random route', async () => {
        renderApp();
        const randomLink = screen.getByText(/Random Pokemon/i);

        // Use act to wrap state updates
        await act(async () => {
            fireEvent.click(randomLink);
        });

        // Wait for the new content to appear
        await waitFor(() => {
            expect(
                screen.getByText(/Fetch Random Pokemon/i)
            ).toBeInTheDocument();
        });
    });
});
