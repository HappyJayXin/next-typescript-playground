import { rest } from 'msw';

export const handlers = [
  rest.get('https://example/book', (_req, res, ctx) => {
    return res(
      ctx.json({
        title: 'Lorem',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente vero ipsa, a obcaecati alias commodi aperiam, neque odit quidem illo blanditiis repudiandae esse explicabo dolorem ipsam eveniet, temporibus veritatis!'
      })
    );
  }),
  rest.get('/reviews', (_req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '123',
          author: 'Jay',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente vero ipsa, a obcaecati alias commodi aperiam, neque odit quidem illo blanditiis repudiandae esse explicabo dolorem ipsam eveniet, temporibus veritatis!'
        }
      ])
    );
  })
];
