import { CommitOptions, DispatchOptions } from 'vuex';

export const MODULE_NAME = 'WALLET';

export interface State {
  balance: number;
}

// DECREASE mutation
export const DECREASE = 'DECREASE';
export interface DecreasePayload {
  amount: number;
}

// PAY action
export const PAY = 'PAY';
export interface PayPayload {
  amount: number;
}
export type PayResult = Promise<number>;

export interface Commit<Prefix extends string = ''> {
  (type: `${Prefix}${typeof DECREASE}`, payload: DecreasePayload, options?: CommitOptions): void;
}

export interface Dispatch<Prefix extends string = ''> {
  (type: `${Prefix}${typeof PAY}`, paylaod: PayPayload, options?: DispatchOptions): PayResult;
}
