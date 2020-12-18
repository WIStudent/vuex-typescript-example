import { DecreasePayload, State } from '../types';

export default (state: Pick<State, 'balance'>, { amount }: DecreasePayload): void => {
  state.balance -= amount;
};
