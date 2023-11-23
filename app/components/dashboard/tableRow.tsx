'use client'

import { ICryptoDataResponse } from "@/app/utils/types";
import { useDispatch } from "react-redux";
import styles from '../../styles/tableRow.module.css';
import Link from "next/link";

export default function TableRow({ data }: {data: ICryptoDataResponse}): React.ReactNode {

  const dispatch = useDispatch();
  const {
    id,
    name,
    percent_change_1h,
    percent_change_24h,
    price_usd,
    rank
  } = data;

  const getRowClass = (value: string): string => {
    const numberValue: number = +value;
    return numberValue > 0 ? styles.positivePrice : numberValue < 0 ? styles.negativePrice : "";
  };

  const percentOneClass = getRowClass(percent_change_1h);
  const percentTwoClass = getRowClass(percent_change_24h);

  return (
    <tr className={styles.tableRowWrapper}>
      <td>{rank}</td>
      <td>
        <Link href='/dashboard/[id]' as={`/dashboard/${id}`}>
          {name}
        </Link>
      </td>
      <td>{price_usd}</td>
      <td className={percentOneClass}>{percent_change_1h}</td>
      <td className={percentTwoClass}>{percent_change_24h}</td>
    </tr>
  );
}