import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
// import '@testing-library/jest-dom/extend-expect';
import { fetchRandomPokemon } from '../../../../services/api';
import RandomPokemon from '../RandomPokemon';
import theme from '../../../../styles/theme';

// Mock only the fetchRandomPokemon function
jest.mock('../../../../services/api', () => ({
    fetchRandomPokemon: jest.fn(),
}));

describe('RandomPokemon component', () => {
    test('fetches and displays a random Pokemon', async () => {
        const mockPokemon = {
            name: 'Bulbasaur',
            sprites: {
                front_default:
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            },
        };

        fetchRandomPokemon.mockResolvedValueOnce(mockPokemon);

        render(
            <ThemeProvider theme={theme}>
                <RandomPokemon />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText('Fetch Random Pokemon'));

        expect(await screen.findByText(/Bulbasaur/i)).toBeInTheDocument();
        expect(await screen.findByAltText(/Bulbasaur/i)).toBeInTheDocument();
    });

    test('displays an error notification when fetching fails', async () => {
        const errorMessage = 'Failed to fetch Pokémon';
        fetchRandomPokemon.mockRejectedValueOnce(new Error(errorMessage));

        render(
            <ThemeProvider theme={theme}>
                <RandomPokemon />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText('Fetch Random Pokemon'));

        expect(await screen.findByText(errorMessage)).toBeInTheDocument();
    });

    test('closes the notification when close button is clicked', async () => {
        const mockPokemon = {
            name: 'Bulbasaur',
            sprites: {
                front_default:
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            },
        };

        fetchRandomPokemon.mockResolvedValueOnce(mockPokemon);

        render(
            <ThemeProvider theme={theme}>
                <RandomPokemon />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText('Fetch Random Pokemon'));

        await waitFor(() =>
            expect(screen.getByText(/Bulbasaur/i)).toBeInTheDocument()
        );

        const closeButton = screen.getByText('×');
        fireEvent.click(closeButton);

        await waitFor(() =>
            expect(
                screen.queryByText('Pokemon fetched successfully!')
            ).not.toBeInTheDocument()
        );
    });
});
