import fetchService from '../fetchService.js';

describe('Fetch service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('handleResponse', () => {
        it('should throw an error if response is not ok', async () => {
            const mockResponse = {
                ok: false,
                status: 500,
                json: jest.fn().mockResolvedValue({ message: 'Server error' }),
            };
            global.fetch = jest.fn().mockResolvedValue(mockResponse);

            await expect(
                fetchService.get('http://example.com')
            ).rejects.toThrow('Server error');
        });

        it('should throw a generic error if response is not ok and no message', async () => {
            const mockResponse = {
                ok: false,
                status: 500,
                json: jest.fn().mockResolvedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(mockResponse);

            await expect(
                fetchService.get('http://example.com')
            ).rejects.toThrow('Something went wrong');
        });

        it('should return json if response is ok', async () => {
            const mockData = { data: 'test' };
            const mockResponse = {
                ok: true,
                json: jest.fn().mockResolvedValue(mockData),
            };
            global.fetch = jest.fn().mockResolvedValue(mockResponse);

            const result = await fetchService.get('http://example.com');
            expect(result).toEqual(mockData);
        });
    });

    describe('http.get', () => {
        it('should make a GET request and return data', async () => {
            const mockData = { data: 'test' };
            const mockResponse = {
                ok: true,
                json: jest.fn().mockResolvedValue(mockData),
            };
            global.fetch = jest.fn().mockResolvedValue(mockResponse);

            const result = await fetchService.get('http://example.com');
            expect(result).toEqual(mockData);
            expect(global.fetch).toHaveBeenCalledWith('http://example.com');
        });
    });

    describe('http.post', () => {
        it('should make a POST request and return data', async () => {
            const mockData = { data: 'test' };
            const mockResponse = {
                ok: true,
                json: jest.fn().mockResolvedValue(mockData),
            };
            global.fetch = jest.fn().mockResolvedValue(mockResponse);

            const result = await fetchService.post('http://example.com', {
                key: 'value',
            });
            expect(result).toEqual(mockData);
            expect(global.fetch).toHaveBeenCalledWith('http://example.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ key: 'value' }),
            });
        });
    });

    describe('http.put', () => {
        it('should make a PUT request and return data', async () => {
            const mockData = { data: 'test' };
            const mockResponse = {
                ok: true,
                json: jest.fn().mockResolvedValue(mockData),
            };
            global.fetch = jest.fn().mockResolvedValue(mockResponse);

            const result = await fetchService.put('http://example.com', {
                key: 'value',
            });
            expect(result).toEqual(mockData);
            expect(global.fetch).toHaveBeenCalledWith('http://example.com', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ key: 'value' }),
            });
        });
    });

    describe('http.delete', () => {
        it('should make a DELETE request and return data', async () => {
            const mockData = { data: 'test' };
            const mockResponse = {
                ok: true,
                json: jest.fn().mockResolvedValue(mockData),
            };
            global.fetch = jest.fn().mockResolvedValue(mockResponse);

            const result = await fetchService.delete('http://example.com');
            expect(result).toEqual(mockData);
            expect(global.fetch).toHaveBeenCalledWith('http://example.com', {
                method: 'DELETE',
            });
        });
    });
});
