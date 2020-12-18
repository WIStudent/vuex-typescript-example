import { ADD_ITEM, CHECKKOUT, CLEAR, State } from './types';
import { addItem, clear } from './mutations';
import { checkout } from './actions';

const initialState = (): State => ({
  items: []
});

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    [ADD_ITEM]: addItem,
    [CLEAR]: clear
  },
  actions: {
    [CHECKKOUT]: checkout
  }
};
