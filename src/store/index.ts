import { createStore, useStore as vuexUseStore, Store as VuexStore } from 'vuex';
import {
  module as shoppingCartModule,
  MODULE_NAME as SHOPPING_CART_MODULE_NAME,
  State as ShoppingCartState,
  Commit as ShoppingCartCommit,
  Dispatch as ShoppingCartDispatch
} from './modules/shoppingCart';
import {
  module as walletModule,
  MODULE_NAME as WALLET_MODULE_NAME,
  State as WalletState,
  Commit as WalletCommit,
  Dispatch as WalletDispatch
} from './modules/wallet';

interface State {
  [SHOPPING_CART_MODULE_NAME]: ShoppingCartState,
  [WALLET_MODULE_NAME]: WalletState
}

type Store<S> = Omit<VuexStore<S>, 'commit'|'dispatch'> & {
  commit: ShoppingCartCommit<`${typeof SHOPPING_CART_MODULE_NAME}/`> & WalletCommit<`${typeof WALLET_MODULE_NAME}/`>;
  dispatch: ShoppingCartDispatch<`${typeof SHOPPING_CART_MODULE_NAME}/`> & WalletDispatch<`${typeof WALLET_MODULE_NAME}/`>;
}

export default createStore<State>({
  modules: {
    [SHOPPING_CART_MODULE_NAME]: shoppingCartModule,
    [WALLET_MODULE_NAME]: walletModule
  }
});

export const useStore = (): Store<State> => vuexUseStore<State>();
