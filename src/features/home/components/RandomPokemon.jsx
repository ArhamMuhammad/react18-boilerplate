// src/features/home/components/RandomPokemon.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Pokemon from '../../../components/Pokemon';
import Notification from '../../../components/Notification';
import { fetchRandomPokemon } from '../../../services/api';

const Container = styled.div`
    text-align: center;
    margin: 20px;
`;

const FetchButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    margin: 20px 0;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 4px;
    &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
    }
`;

const RandomPokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [notification, setNotification] = useState({ message: '', type: '' });

    const handleFetchPokemon = async () => {
        try {
            const data = await fetchRandomPokemon();
            setPokemon(data);
            setNotification({
                message: 'Pokemon fetched successfully!',
                type: 'success',
            });
        } catch (error) {
            setNotification({ message: error.message, type: 'error' });
        }
    };

    return (
        <Container>
            <FetchButton onClick={handleFetchPokemon}>
                Fetch Random Pokemon
            </FetchButton>
            {notification.message && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification({ message: '', type: '' })}
                />
            )}
            {pokemon && (
                <Pokemon
                    name={pokemon.name}
                    image={pokemon.sprites.front_default}
                />
            )}
        </Container>
    );
};

export default RandomPokemon;
