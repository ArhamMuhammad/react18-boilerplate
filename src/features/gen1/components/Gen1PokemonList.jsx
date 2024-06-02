// src/features/gen1/components/Gen1PokemonList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Pokemon from '../../../components/Pokemon';
import Notification from '../../../components/Notification';
import { fetchGen1Pokemon } from '../../../services/api';

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

const PokemonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
`;

const Gen1PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [notification, setNotification] = useState({ message: '', type: '' });

    const handleFetchGen1Pokemon = async () => {
        try {
            const data = await fetchGen1Pokemon();
            setPokemons(data);
            setNotification({
                message: 'Gen 1 Pokémon fetched successfully!',
                type: 'success',
            });
        } catch (error) {
            setNotification({ message: error.message, type: 'error' });
        }
    };

    return (
        <Container>
            <FetchButton onClick={handleFetchGen1Pokemon}>
                Fetch Gen 1 Pokémon
            </FetchButton>
            {notification.message && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification({ message: '', type: '' })}
                />
            )}
            <PokemonGrid>
                {pokemons.map((pokemon) => (
                    <Pokemon
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                    />
                ))}
            </PokemonGrid>
        </Container>
    );
};

export default Gen1PokemonList;
