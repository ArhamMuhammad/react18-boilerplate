// src/components/Pokemon.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PokemonWrapper = styled.div`
    text-align: center;
`;

const PokemonName = styled.h1`
    font-size: 24px;
    margin: 16px 0;
`;

const PokemonImage = styled.img`
    width: 150px;
    height: 150px;
`;

const Pokemon = ({ name, image }) => (
    <PokemonWrapper>
        <PokemonName>{name}</PokemonName>
        <PokemonImage src={image} alt={name} />
    </PokemonWrapper>
);

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Pokemon;
