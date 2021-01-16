import { CommitOptions, DispatchOptions } from 'vuex';

export const MODULE_NAME = 'SHOPPING_CART';

export interface State {
  items: string[];
}

// ADD_ITEM mutation
export const ADD_ITEM = 'ADD_ITEM';
export interface AddItemPayload {
  itemId: string;
}

// CLEAR mutation
export const CLEAR = 'CLEAR';
export type ClearPayload = undefined;

// CHECKOUT action
export const CHECKOUT = 'CHECKOUT';
export type CheckoutPayload = undefined;
export type CheckoutResult = Promise<void>

export interface Commit<Prefix extends string = ''> {
  (type: `${Prefix}${typeof ADD_ITEM}`, payload: AddItemPayload, options?: CommitOptions): void;
  (type: `${Prefix}${typeof CLEAR}`, payload?: ClearPayload, options?: CommitOptions): void;
}

export interface Dispatch<Prefix extends string = ''> {
  (type: `${Prefix}${typeof CHECKOUT}`, payload?: CheckoutPayload, options?: DispatchOptions): CheckoutResult;
}
