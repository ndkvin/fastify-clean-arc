import pool from '../../db/postgres/pool';
import NotesRepositoryPostgres from '../NoteRepositoryPostgres';
import NoteTableHelpers from '../../../../test/NoteTableHelpers';

describe('NotesRepositoryPostgres', () => {
  afterEach(async () => {
    await NoteTableHelpers.cleanTable();
  });

  afterAll(async () => {
    await pool.end();
  });

  describe('AddNote', () => {
    it('should add note', async () => {
      const payload = {
        title: 'ini title',
        body: 'ini body',
      };

      const notesRepositoryPostgres = new NotesRepositoryPostgres(pool, () => '123');

      const result = await notesRepositoryPostgres.addNote(payload);
      expect(result).toEqual({
        id: 'note-123',
      });
      const check = await NoteTableHelpers.getNoteById('note-123');
      expect(check).toEqual({
        id: 'note-123',
        title: 'ini title',
        body: 'ini body',
        owner: 'saya',
      });
    });
  });
});
