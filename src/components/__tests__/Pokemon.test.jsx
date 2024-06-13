import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
// import '@testing-library/jest-dom/extend-expect';
import Pokemon from '../Pokemon';
import theme from '../../styles/theme';

test('renders Pokemon component', () => {
    render(
        <ThemeProvider theme={theme}>
            <Pokemon
                name="Pikachu"
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            />
        </ThemeProvider>
    );

    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Pikachu/i)).toBeInTheDocument();
});
