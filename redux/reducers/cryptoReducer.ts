import { ICryptoState, ICryptoDataResponse } from '@/app/utils/types';
import { AnyAction, Reducer } from '@reduxjs/toolkit';
import {
  FETCH_CRYPTO_DATA_BY_ID_SUCCESS,
  FETCH_CRYPTO_DATA_FAILURE,
  FETCH_CRYPTO_DATA_REQUEST,
  FETCH_CRYPTO_DATA_SUCCESS,
  SORT_DATA_TABLE,
} from '../actions/actionTypes';

const cryptoSelectedInitialState: ICryptoDataResponse = {
  id: '',
  name: '',
  percent_change_1h: '',
  percent_change_24h: '',
  price_usd: '',
  rank: 0,
  symbol: ''
};

const initialState: ICryptoState = {
  loading: false,
  dataList: [],
  cryptoSelected: cryptoSelectedInitialState,
  error: '',
};

export type ICryptoReducer = Reducer<ICryptoState>;

export const cryptoReducer: ICryptoReducer = (
  state = initialState as ICryptoState,
  action: AnyAction
) => {
  switch (action.type) {
    case FETCH_CRYPTO_DATA_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_CRYPTO_DATA_SUCCESS: {
      if (action.payload) {
        const dataList = action.payload;
        return { ...state, dataList, loading: false };
      }
      return state;
    }
    case FETCH_CRYPTO_DATA_FAILURE: {
      if (action.payload) {
        const error = action.payload;
        return { ...state, error, loading: false };
      }
      return state;
    }
    case SORT_DATA_TABLE: {
      if (action.payload){
          const dataList = action.payload
          return {...state, dataList}
      }
      return {...state}
    }
    case FETCH_CRYPTO_DATA_BY_ID_SUCCESS: {
      if (action.payload) {
        const cryptoSelected = action.payload
        return { ...state, cryptoSelected }
      }
    }
    default: {
      return state;
    }
  }
};
