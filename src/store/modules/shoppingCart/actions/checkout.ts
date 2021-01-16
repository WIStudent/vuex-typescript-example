import { Dispatch, Commit, CheckoutResult, CLEAR } from '../types';
import { Dispatch as WalletDispatch, MODULE_NAME as WALLET_MODULE_NAME, PAY } from '../../wallet/types';

interface Context {
  commit: Commit,
  dispatch: Dispatch & WalletDispatch<`${typeof WALLET_MODULE_NAME}/`>
}
export default async ({ commit, dispatch }: Context): CheckoutResult => {
  await dispatch(`${WALLET_MODULE_NAME}/${PAY}`, { amount: 42.36 }, { root: true });
  commit(CLEAR);
};
