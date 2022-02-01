import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import { IContainer } from '../container';
import notes from '../../interfaces/api/note';
import ClientError from '../../commons/exceptions/ClientError';

const createServer = (container: IContainer) => {
  const app = fastify();

  app.register(fastifyCors);

  app.setErrorHandler((err, _, reply) => {
    const { message, statusCode } = err;

    if (err instanceof ClientError) {
      reply.status(statusCode as number).send({
        status: 'fail',
        message,
      });
    }

    console.log(err);
    reply.status(500).send({
      status: 'error',
      message: 'an internal server error',
    });
  });

  app.register(notes, { container });

  return app;
};

export default createServer;
