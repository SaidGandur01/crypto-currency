'use client'

import { TButtonProps } from '@/app/utils/types';
import styles from '../../styles/homeButton.module.css'
import { useRouter } from 'next/navigation'

export default function HomeButton(props: TButtonProps): React.ReactNode {
  const router = useRouter();

  const onToggleChange = (): void => {
    router.push('/dashboard')
  }

  return (
    <button className={styles.button} onClick={onToggleChange}>
      {props.label}
    </button>
  );
}