import { State, AddItemPayload } from '../types';

export default (state: Pick<State, 'items'>, { itemId }: AddItemPayload): void => {
  state.items = [...state.items, itemId];
};
