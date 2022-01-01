import { rest } from 'msw';
import { setupServer } from 'msw/node';
import fetchData from './Api';

const server = setupServer(
    rest.get('https://animechan.vercel.app/api/random', (req, res, ctx) => {
        return res(
            ctx.json({ anime: 'naruto' })
        );
    })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('Successfully fetches Anime name', async () => {
    const anime = await fetchData();
    expect(anime).toEqual('naruto');
});