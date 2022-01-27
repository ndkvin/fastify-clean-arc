import dotenv from 'dotenv';
import fastify from 'fastify';

dotenv.config();

const server = fastify();

// eslint-disable-next-line no-unused-vars
server.get('/ping', async (request, reply) => 'pong\n');

server.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
