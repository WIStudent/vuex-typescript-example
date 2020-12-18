import { Commit, PayPayload, PayResult, State } from '../types';

interface Context {
  state: Pick<State, 'balance'>;
  commit: Commit;
}
export default async ({ commit, state }: Context, payload: PayPayload): PayResult => {
  commit('DECREASE', payload);
  return state.balance;
};
