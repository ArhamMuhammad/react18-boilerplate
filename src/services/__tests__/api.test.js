import { fetchRandomPokemon, fetchGen1Pokemon } from '../api.js';
import fetchService from '../fetchService.js';

jest.mock('../fetchService.js');

describe('API services', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('fetchRandomPokemon', () => {
        it('should fetch a random Pokémon', async () => {
            const mockData = { name: 'Bulbasaur', id: 1 };
            fetchService.get.mockResolvedValueOnce(mockData);

            const result = await fetchRandomPokemon();
            expect(result).toEqual(mockData);
            expect(fetchService.get).toHaveBeenCalledWith(
                expect.stringMatching(
                    /https:\/\/pokeapi.co\/api\/v2\/pokemon\/\d+/
                )
            );
        });

        it('should handle errors when fetching a random Pokémon', async () => {
            const mockError = new Error('Network error');
            fetchService.get.mockRejectedValueOnce(mockError);

            await expect(fetchRandomPokemon()).rejects.toThrow('Network error');
        });
    });

    describe('fetchGen1Pokemon', () => {
        it('should fetch Gen 1 Pokémon', async () => {
            const mockData = Array.from({ length: 151 }, (_, index) => ({
                name: `Pokemon${index + 1}`,
                id: index + 1,
            }));
            fetchService.get.mockImplementation((url) => {
                const id = parseInt(url.match(/pokemon\/(\d+)/)[1], 10);
                return Promise.resolve(mockData[id - 1]);
            });

            const result = await fetchGen1Pokemon();
            expect(result).toEqual(mockData);
            expect(fetchService.get).toHaveBeenCalledTimes(151);
        });

        it('should handle errors when fetching Gen 1 Pokémon', async () => {
            const mockError = new Error('Network error');
            fetchService.get.mockRejectedValueOnce(mockError);

            await expect(fetchGen1Pokemon()).rejects.toThrow('Network error');
        });
    });
});
