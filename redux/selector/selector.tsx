import { ICryptoDataResponse, ICryptoState, StateCrypto } from "@/app/utils/types";

export const getCryptoDataList = (state: StateCrypto): ICryptoDataResponse[] => {
  const cryptoState = state.cryptoState;
  return cryptoState.dataList
};
