import createServer from '../createServer';
import container, { IContainer } from '../../container';

describe('error default', () => {
  it('should return 404 when not found url', async () => {
    const server = createServer(container);

    const response = await server.inject({
      method: 'GET',
      url: '/api/xxx',
    });

    expect(response.statusCode).toEqual(404);
    expect(response.statusMessage).toEqual('Not Found');
  });

  it('should return error when send incorrect container', async () => {
    const server = createServer({} as IContainer);

    const payload = {
      title: 'ini title',
      body: 'ini message',
    };

    const response = await server.inject({
      method: 'POST',
      url: '/api/note',
      payload,
    });
    expect(response.statusCode).toEqual(500);
    expect(response.statusMessage).toEqual('Internal Server Error');
  });
});
