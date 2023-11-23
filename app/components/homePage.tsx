import bitcoinImage from '../../public/images/bitcoin.jpg';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import styles from '../styles/homePage.module.css';
import { TCryptoGeneralInformation } from '../utils/types';

const fetchCryptoInformation = async (): Promise<
  TCryptoGeneralInformation[]
> => {
  const url = 'https://api.coinlore.net/api/global/';
  const response = await fetch(url, { next: { revalidate: 60 } });

  if (!response.ok) {
    throw new Error('Failed to fetch crypto information');
  }

  return response.json();
};

export default async function HomePage() {
  const [response]: TCryptoGeneralInformation[] =
    await fetchCryptoInformation();
  const {
    total_volume,
    eth_d,
    mcap_change,
    volume_change,
    avg_change_percent,
    volume_ath,
    mcap_ath,
  } = response;

  return (
    <div className={styles.homePage}>
      <div
        className={styles.firstColumn}
        style={{
          backgroundImage: `url(${bitcoinImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className={styles.secondColumn}>
        <div className={styles.logoWrapper}>
          <Image src={logo} alt='logo-image' width={150} height={140} />
        </div>
        <hr className={styles.lineSeparator} />
        <div className={styles.information}>
          <h4 className={styles.informationItems}>
            Total 24h volume:{' '}
            <span className={styles.itemData}>${total_volume}.</span>
          </h4>
          <h4 className={styles.informationItems}>
            Bitcoin dominance in Ethereum:{' '}
            <span className={styles.itemData}>{eth_d}%.</span>
          </h4>
          <h4 className={styles.informationItems}>
            Market cap change in the last 24h:{' '}
            <span className={styles.itemData}>{mcap_change}%.</span>
          </h4>
          <h4 className={styles.informationItems}>
            Volume change in the last 24h:{' '}
            <span className={styles.itemData}>{volume_change}%.</span>
          </h4>
          <h4 className={styles.informationItems}>
            Average change percent:{' '}
            <span className={styles.itemData}>{avg_change_percent}%.</span>
          </h4>
          <h4 className={styles.informationItems}>
            All-time high volume:{' '}
            <span className={styles.itemData}>${volume_ath}.</span>
          </h4>
          <h4 className={styles.informationItems}>
            All-time high market cap:{' '}
            <span className={styles.itemData}>${mcap_ath}.</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
