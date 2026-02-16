import { createAuthClient } from 'better-auth/react';
import { usernameClient } from 'better-auth/client/plugins';
import { nextCookies } from 'better-auth/next-js';

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  fetchOptions: {
    onError: async (context) => {
      const { response } = context;
      if (response.status === 429) {
        const retryAfter = response.headers.get('X-Retry-After');
        console.log(`Rate limit exceeded. Retry after ${retryAfter} seconds`);
      }
    },
  },
  plugins: [usernameClient(), nextCookies()],
});
