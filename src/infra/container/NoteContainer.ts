import { Container, ContainerModule } from 'inversify';
import Validator from 'fastest-validator';
import { nanoid } from 'nanoid';
import { INotesRepository } from '../../domains/notes/NotesRepository';
import { INoteValidator } from '../../apps/security/validator/NoteValidaotr';
import NoteUseCase from '../../apps/use_case/NoteUseCase';
import NOTES_TYPES, { Fv, Nanoid, Pool } from '../../commons/inversifyTypes/notes';
import pool from '../db/postgres/pool';
import NoteRepositoryPostgres from '../repository/NoteRepositoryPostgres';
import NoteFValidator from '../security/validator/NoteFValidator';

const fv = new Validator();

const dependencies = new ContainerModule((bind) => {
  bind<Pool>(NOTES_TYPES.Pool).toConstantValue(pool);
  bind<Nanoid>(NOTES_TYPES.Nanoid).toConstantValue(nanoid);
  bind<Fv>(NOTES_TYPES.Fv).toConstantValue(fv);
});

const apps = new ContainerModule((bind) => {
  bind<INotesRepository>(NOTES_TYPES.Repository).to(NoteRepositoryPostgres);
  bind<INoteValidator>(NOTES_TYPES.Validator).to(NoteFValidator);
  bind<NoteUseCase>(NOTES_TYPES.UseCase).to(NoteUseCase);
});

const container = new Container();

container.load(dependencies, apps);

export default container;
