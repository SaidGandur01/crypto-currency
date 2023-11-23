'use client'

import { fetchCryptoData } from "@/redux/actions/cryptoActions";
import { getCryptoDataList } from "@/redux/selector/selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TableComponent (): React.ReactNode {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoData() as any);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cryptoData = useSelector(getCryptoDataList);
  console.log('crypto data: ', cryptoData)

  return (
    <div>
      <h1>This is my table</h1>
    </div>
  );
}