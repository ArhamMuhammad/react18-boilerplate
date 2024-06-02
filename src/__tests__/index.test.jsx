import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import theme from '../styles/theme';

describe('Root application rendering', () => {
    it('renders without crashing', () => {
        const { unmount } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        );
        unmount();
    });
});
