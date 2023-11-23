'use client';

import { CRYPTO_TABLE_HEAD_KEYS } from '@/app/utils/constants';
import { fetchCryptoData, sortDataTable } from '@/redux/actions/cryptoActions';
import { getCryptoDataList } from '@/redux/selector/selector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from '../../styles/tableComponent.module.css';
import TableRow from './tableRow';
import { ICryptoDataResponse } from '@/app/utils/types';

export default function TableComponent(): React.ReactNode {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoData() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSort = (key: string) => {
    const sortedData = [...cryptoData].sort((a: any, b: any): any => {
      if (a[key] > b[key]) {
        return -1;
      } else if (b[key] > a[key]) {
        return -1;
      }
    });
    dispatch(sortDataTable(sortedData));
  };

  const cryptoData = useSelector(getCryptoDataList);
  const headerInfo = Object.entries(CRYPTO_TABLE_HEAD_KEYS);

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            {headerInfo.map(([key, value]) => {
              return <th key={key} onClick={()=>handleSort(key)}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {cryptoData.map((currency: ICryptoDataResponse) => {
            return <TableRow key={currency.id} data={currency} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
