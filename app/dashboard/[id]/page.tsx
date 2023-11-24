'use client';
import { fetchCryptoById } from '@/redux/actions/cryptoActions';
import { getCryptoSelectedById } from '@/redux/selector/selector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/currencySelected.module.css';
import logo from '../../../public/images/logo.png';

export default function CurrencySelected({
  params,
}: {
  params: any;
}): React.ReactNode {
  const dispatch = useDispatch();
  const { id } = params;

  useEffect(() => {
    dispatch(fetchCryptoById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentCrypto = useSelector(getCryptoSelectedById);

  return (
    <div className={styles.currencySelectedWrapper}>
      <div className={styles.content}>
        <div className={styles.firstColumn}>
          <span>Currency Name:</span>
          <span>abbreviation:</span>
          <span>Current Price:</span>
        </div>
        <div className={styles.secondColumn}>
          <span>{currentCrypto.name}</span>
          <span>{currentCrypto.symbol}</span>
          <span>${currentCrypto.price_usd}</span>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={logo}
          alt='logo-image'
          width={200}
          height={190}
        />
      </div>
    </div>
  );
}
