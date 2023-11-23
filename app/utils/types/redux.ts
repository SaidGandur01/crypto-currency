import { Action } from "@reduxjs/toolkit";

export type ICryptoDataResponse = {
  id: string;
  name: string;
  percent_change_1h: string;
  percent_change_24h: string;
  price_usd: string
  rank: number
};

export type ICryptoState = {
  loading: boolean;
  dataList: ICryptoDataResponse[];
  cryptoSelected: ICryptoDataResponse;
  error: string;
}

export type StateCrypto = {
  cryptoState: ICryptoState;
}

export type ErrorResponse = {
  name: string;
  message: string;
}

export interface SimpleFSA<T> extends Action {
  type: T;
};

export interface FSA<T, P> extends SimpleFSA<T> {
  payload?: P;
};
