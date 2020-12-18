import { pay } from './actions';
import { decrease } from './mutations';
import { DECREASE, PAY, State } from './types';

const initalState = (): State => ({
  balance: 100
});

export default {
  namespaced: true,
  state: initalState,
  mutations: {
    [DECREASE]: decrease
  },
  actions: {
    [PAY]: pay
  }
};
