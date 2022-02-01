import { FastifyReply, FastifyRequest } from 'fastify';
import { Container } from 'inversify';
import NOTES_TYPES from '../../../commons/inversifyTypes/notes';
import { IContainer } from '../../../infra/container';
import { IAddNote } from '../../../domains/notes/Entities';
import NoteUseCase from '../../../apps/use_case/NoteUseCase';

type AddNoteRequest = FastifyRequest<{
  Body: IAddNote
}>

class NoteController {
  private _container: Container;

  constructor({ noteContainer } : IContainer) {
    this._container = noteContainer;

    this.addNote = this.addNote.bind(this);
  }

  public async addNote(req: AddNoteRequest, res: FastifyReply) {
    const noteUseCase = this._container.get<NoteUseCase>(NOTES_TYPES.UseCase);

    const addedNote = await noteUseCase.addNoteExecute(req.body);

    res.status(201).send({
      status: 'success',
      addedNote,
    });
  }
}

export default NoteController;
