import { ICryptoDataResponse, StateCrypto } from "@/app/utils/types";

export const getCryptoDataList = (state: StateCrypto): ICryptoDataResponse[] => {
  const cryptoState = state.cryptoState;
  return cryptoState.dataList
};

export const getCryptoSelectedById = (state: StateCrypto): ICryptoDataResponse => {
  const cryptoState = state.cryptoState;
  return cryptoState.cryptoSelected;
}
