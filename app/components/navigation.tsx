'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/navigation.module.css';
import { ROUTES } from '../utils/constants';
import { TRoute, TNavigationItems } from '../utils/types';
import { usePathname, useRouter } from 'next/navigation'

export default function Navigation() {
  const [currentItem, setCurrentItem] = useState<TNavigationItems>('home');
  const router = useRouter();
  const pathName = usePathname();

  const onToggleChange = (route: TRoute): void => {
    setCurrentItem(route.label);
    router.push(route.route)
  }

  useEffect(() => {
    const pathMap: { [key: string]: TNavigationItems } = {
      '/': 'home',
      '/dashboard': 'dashboard'
    };
    setCurrentItem(pathMap[pathName]);
  }, [pathName]);

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
