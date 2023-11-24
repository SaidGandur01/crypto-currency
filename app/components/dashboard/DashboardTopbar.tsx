'use client';
import { ChangeEvent, useState } from 'react';
import { getCryptoDataList } from '@/redux/selector/selector';
import { ICryptoDataResponse } from '@/app/utils/types';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import styles from '../../styles/dashboardTopbar.module.css';

export default function DashboardTopbar(): React.ReactNode {
  const [searchKey, setSearchKey] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [dropdownOption, setDropdownOption] = useState<ICryptoDataResponse[]>(
    []
  );

  const cryptoData = useSelector(getCryptoDataList);
  const router = useRouter();

  const onToggleDropdown = (): void => {
    setShowDropdown(!showDropdown);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setSearchKey(currentValue);

    const filteredDataList = cryptoData.filter(
      (crypto: ICryptoDataResponse) => {
        const name = crypto.name.toLowerCase();
        const filteredData = name.includes(searchKey.toLowerCase());
        return filteredData;
      }
    );

    let optionsToRender: any = [];
    if (currentValue !== '') {
      setShowDropdown(true);
      optionsToRender = filteredDataList.slice(0, 8);
      setDropdownOption(optionsToRender);
    } else {
      setShowDropdown(false);
    }

    setDropdownOption(optionsToRender);
  };

  const onHandleSelect = (cryptoId: string): void => {
    setShowDropdown(false);
    setDropdownOption([]);
    setSearchKey('');
    router.push(`/dashboard/${cryptoId}`)
  };

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.firstSection}>
        <h2>Stay updated with the latest info at your fingertips</h2>
        <span>Dive into details on each currency!</span>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.inputWrapper}>
          <input
            type='text'
            value={searchKey}
            placeholder='Search by crypto'
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={styles.dropdownWrapper}>
          <button onClick={onToggleDropdown}>
            <span>&#8964;</span>
          </button>
          {showDropdown && (
            <div className={styles.dropdownElement}>
              {dropdownOption?.map((crypto: ICryptoDataResponse) => {
                return (
                  <span
                    key={crypto.id}
                    onClick={() => onHandleSelect(crypto.id)}
                  >
                    {crypto.name}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
