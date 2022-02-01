import dotenv from 'dotenv';
import createServer from './infra/http/createServer';
import container from './infra/container';

dotenv.config();

const server = createServer(container);

server.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
