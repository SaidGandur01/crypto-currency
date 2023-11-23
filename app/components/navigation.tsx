'use client';

import { useState } from 'react';
import styles from '../styles/navigation.module.css';
import { ROUTES } from '../utils/constants';
import { TRoute, TNavigationItems } from '../utils/types';
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const [currentItem, setCurrentItem] = useState<TNavigationItems>('home');
  const router = useRouter();

  const onToggleChange = (route: TRoute): void => {
    setCurrentItem(route.label);
    router.push(route.route)
  }

  return (
    <div>
      <ul className={styles.ulWrapper}>
        {ROUTES.map((route: TRoute) => {
          return (
            <li key={route.route} className={styles.listItemNav}>
              <span
                className={`${styles.navigationItem} ${currentItem === route.label ? styles.activeItem : ''}`}
                onClick={() => onToggleChange(route)}
              >{route.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
