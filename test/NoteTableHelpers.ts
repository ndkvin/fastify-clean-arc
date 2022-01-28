/* istanbul ignore file */
import pool from '../src/infra/db/postgres/pool';

const NoteTableHelpers = {
  async addNote({
    id = 'note-123',
    title = 'title',
    body = 'body',
    owner = 'user-123',
  }) {
    const query = {
      text: 'INSERT INTO notes VALUES($1, $2, $3, $4)',
      values: [id, title, body, owner],
    };

    await pool.query(query);
  },

  async getNoteById(id = 'note-123') {
    const query = {
      text: 'SELECT * FROM notes WHERE id = $1',
      values: [id],
    };

    const result = await pool.query(query);
    return result.rows[0];
  },

  async cleanTable() {
    await pool.query('TRUNCATE TABLE notes CASCADE');
  },
};

export default NoteTableHelpers;
