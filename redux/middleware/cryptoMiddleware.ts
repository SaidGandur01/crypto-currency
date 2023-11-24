import { NextCrypto, TCryptoStoreMiddleware } from "@/app/utils/types";
import { AnyAction } from "@reduxjs/toolkit";
import { FETCH_CRYPTO_BY_ID_INIT } from "../actions/actionTypes";
import { fetchCryptoDataById } from "../actions/cryptoActions";

export const cryptoDataMiddleware = (store: TCryptoStoreMiddleware) => (next: NextCrypto) => (action: AnyAction) => {
  next(action);
  switch (action.type) {
    case FETCH_CRYPTO_BY_ID_INIT: {
      store.dispatch(fetchCryptoDataById(action.payload));
      break;
    }
  }
}