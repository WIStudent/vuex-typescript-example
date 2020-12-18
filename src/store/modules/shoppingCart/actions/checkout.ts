import { Dispatch, Commit, CheckoutResult } from '../types';
import { Dispatch as WalletDispatch, MODULE_NAME as WALLET_MODULE_NAME } from '../../wallet/types';

interface Context {
  commit: Commit,
  dispatch: Dispatch & WalletDispatch<`${typeof WALLET_MODULE_NAME}/`>
}
export default async ({ commit, dispatch }: Context): CheckoutResult => {
  await dispatch('WALLET/PAY', { amount: 42.36 }, { root: true });
  commit('CLEAR');
};
