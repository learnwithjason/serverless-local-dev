import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const { name = 'corgi friends' } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  };
};
