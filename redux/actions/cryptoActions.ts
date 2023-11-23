import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import {
  ErrorResponse,
  FSA,
  ICryptoDataResponse,
  SimpleFSA,
} from '@/app/utils/types';
import {
  FETCH_CRYPTO_DATA_FAILURE,
  FETCH_CRYPTO_DATA_REQUEST,
  FETCH_CRYPTO_DATA_SUCCESS,
} from './actionTypes';

export type TFetchCryptoDataRequest = SimpleFSA<
  typeof FETCH_CRYPTO_DATA_REQUEST
>;
export type TFetchCryptoDatSuccess = FSA<
  typeof FETCH_CRYPTO_DATA_SUCCESS,
  ICryptoDataResponse[]
>;
export type TFetchCryptoDataFailure = FSA<typeof FETCH_CRYPTO_DATA_FAILURE, {}>;

const fetchCryptosRequest = (): TFetchCryptoDataRequest => {
  return {
    type: FETCH_CRYPTO_DATA_REQUEST,
  };
};
const fetchCryptosSuccess = (
  dataListResponse: ICryptoDataResponse[]
): TFetchCryptoDatSuccess => {
  return {
    type: FETCH_CRYPTO_DATA_SUCCESS,
    payload: dataListResponse,
  };
};
const fetchCryptosFailure = (error: ErrorResponse): TFetchCryptoDataFailure => {
  return {
    type: FETCH_CRYPTO_DATA_FAILURE,
    payload: error.message,
  };
};

export const fetchCryptoData = () => {
  return (dispatch: Dispatch<AnyAction>): void => {
    dispatch(fetchCryptosRequest());
    axios
      .get('https://api.coinlore.net/api/tickers/')
      .then((response) => {
        const { data } = response;
        if (data.data && data.data.length > 0) {
          dispatch(fetchCryptosSuccess(data.data));
        } else {
          throw new Error('Ups something went wrong ! ');
        }
      })
      .catch((err) => {
        dispatch(fetchCryptosFailure(err));
      });
  };
};
