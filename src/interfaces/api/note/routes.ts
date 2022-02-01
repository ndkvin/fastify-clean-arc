import { FastifyPluginAsync } from 'fastify';
import { IContainer } from '../../../infra/container';
import NoteController from './controllers';

const noteRoutes: FastifyPluginAsync<{
  container: IContainer
}> = async (app, { container }) => {
  const noteController = new NoteController(container);

  app.post('/note', noteController.addNote);
};

export default noteRoutes;
