import { State } from '../types';

export default (state: Pick<State, 'items'>): void => {
  state.items = [];
};
