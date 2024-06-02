import React from 'react';
import {
    render,
    screen,
    fireEvent,
    cleanup,
    waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Gen1PokemonList from '../Gen1PokemonList';
import theme from '../../../../styles/theme';
import { fetchGen1Pokemon } from '../../../../services/api';

jest.mock('../../../../services/api');

const mockPokemon = [
    {
        id: 1,
        name: 'Bulbasaur',
        sprites: {
            front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
    },
    {
        id: 2,
        name: 'Ivysaur',
        sprites: {
            front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        },
    },
];

describe('Gen1PokemonList component', () => {
    afterEach(cleanup);

    test('renders Gen1PokemonList component', () => {
        render(
            <ThemeProvider theme={theme}>
                <Gen1PokemonList />
            </ThemeProvider>
        );

        expect(screen.getByText(/Fetch Gen 1 Pokémon/i)).toBeInTheDocument();
    });

    test('fetches and displays Gen 1 Pokémon successfully', async () => {
        fetchGen1Pokemon.mockResolvedValueOnce(mockPokemon);

        render(
            <ThemeProvider theme={theme}>
                <Gen1PokemonList />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText(/Fetch Gen 1 Pokémon/i));

        await waitFor(() => {
            expect(screen.getByText(/Bulbasaur/i)).toBeInTheDocument();
            expect(screen.getByText(/Ivysaur/i)).toBeInTheDocument();
            expect(
                screen.getByText(/Gen 1 Pokémon fetched successfully!/i)
            ).toBeInTheDocument();
        });
    });

    test('displays an error notification when fetching fails', async () => {
        fetchGen1Pokemon.mockRejectedValueOnce(
            new Error('Failed to fetch Gen 1 Pokémon')
        );

        render(
            <ThemeProvider theme={theme}>
                <Gen1PokemonList />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText(/Fetch Gen 1 Pokémon/i));

        expect(
            await screen.findByText(/Failed to fetch Gen 1 Pokémon/i)
        ).toBeInTheDocument();
    });

    test('closes the notification when close button is clicked', async () => {
        fetchGen1Pokemon.mockResolvedValueOnce(mockPokemon);

        render(
            <ThemeProvider theme={theme}>
                <Gen1PokemonList />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText(/Fetch Gen 1 Pokémon/i));

        await waitFor(() =>
            expect(
                screen.getByText(/Gen 1 Pokémon fetched successfully!/i)
            ).toBeInTheDocument()
        );

        const closeButton = screen.getByText('×');
        fireEvent.click(closeButton);

        await waitFor(() =>
            expect(
                screen.queryByText(/Gen 1 Pokémon fetched successfully!/i)
            ).not.toBeInTheDocument()
        );
    });
});
