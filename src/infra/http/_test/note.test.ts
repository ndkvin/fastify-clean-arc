import createServer from '../createServer';
import container from '../../container';
import pool from '../../db/postgres/pool';
import NoteTableHelpers from '../../../../test/NoteTableHelpers';

describe('note service test', () => {
  afterEach(async () => {
    await NoteTableHelpers.cleanTable();
  });

  afterAll(async () => {
    await pool.end();
  });

  describe('post note', () => {
    it('should return error when send empty payload', async () => {
      const server = createServer(container);
      // bad payload
      const payload = {};

      const response = await server.inject({
        method: 'POST',
        url: '/api/note',
        payload,
      });
      const resJson = JSON.parse(response.body);
      expect(resJson.status).toEqual('fail');
      expect(resJson.message).toEqual('title can\'t empty');
      expect(response.statusCode).toEqual(400);
    });

    it('should return error when send empty payload', async () => {
      const server = createServer(container);
      // bad payload
      const payload = {
        title: 'ini judul',
        body: 'ini body',
      };

      const response = await server.inject({
        method: 'POST',
        url: '/api/note',
        payload,
      });
      const resJson = JSON.parse(response.body);
      expect(resJson.status).toEqual('success');
      expect(response.statusCode).toEqual(201);
    });
  });
});
