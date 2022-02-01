import { Container } from 'inversify';
import noteContainer from './NoteContainer';

export interface IContainer {
  noteContainer: Container,
}

export default {
  noteContainer,
};
