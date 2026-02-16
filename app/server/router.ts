import { os } from '@orpc/server';

const ping = os.handler(async () => 'ping');
const pong = os.handler(async () => 'pong');

export const router = {
  ping,
  pong,
  nested: { ping, pong },
};
