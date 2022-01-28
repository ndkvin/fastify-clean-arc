import { INotesRepository } from '../../../domains/notes/NotesRepository';
import { INoteValidator } from '../../security/validator/NoteValidaotr';
import NoteUseCase from '../NoteUseCase';

describe('NoteUseCase', () => {
  const noteRepository = {} as INotesRepository;
  const noteValidator = {} as INoteValidator;

  it('should return orcesting add note use case', async () => {
    const payload = {
      title: 'title',
      body: 'body',
    };
    const expectedResult = {
      id: 'note-123',
    };

    noteValidator.AddNoteValidator = jest.fn();
    noteRepository.addNote = jest.fn(() => Promise.resolve(expectedResult));

    const noteUseCase = new NoteUseCase(noteRepository, noteValidator);

    const result = await noteUseCase.addNoteExecute(payload);

    expect(noteValidator.AddNoteValidator).toBeCalledWith(payload);
    expect(noteRepository.addNote).toBeCalledWith(payload);
    expect(result).toEqual(expectedResult);
  });
});
