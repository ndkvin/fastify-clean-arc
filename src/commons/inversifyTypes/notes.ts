import { nanoid } from 'nanoid';
import Validator from 'fastest-validator';
import pool from '../../infra/db/postgres/pool';

const fv = new Validator();

export type Nanoid = typeof nanoid;
export type Pool = typeof pool;
export type Fv = typeof fv;

const NOTES_TYPES = {
  Repository: Symbol.for('INotesRepository'),
  Nanoid: Symbol.for('nanoid'),
  Pool: Symbol.for('pool'),
  Fv: Symbol.for('fv'),
};

export default NOTES_TYPES;
