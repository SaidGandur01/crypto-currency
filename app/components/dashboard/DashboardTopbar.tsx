'use client'
import { ChangeEvent } from 'react';
import styles from '../../styles/dashboardTopbar.module.css'

export default function DashboardTopbar (): React.ReactNode {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value
    console.log('value from input: ', currentValue)
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
            type="text"
            placeholder='Search by crypto'
            onChange={(e)=>handleInputChange(e)}
          />
        </div>
        <div className="dropdown-wrapper">
          <button>dropdown</button>
        </div>
      </div>
    </div>
  );
}
