import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    padding: 1rem;
`;

const NavbarLink = styled(Link)`
    margin: 0 1rem;
    text-decoration: none;
    color: black; //change as needed

    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

const Navbar = () => (
    <NavbarContainer>
        <NavbarLink to="/">Gen 1 Pokemon</NavbarLink>
        <NavbarLink to="/random">Random Pokemon</NavbarLink>
    </NavbarContainer>
);

export default Navbar;
