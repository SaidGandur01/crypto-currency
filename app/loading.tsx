import styles from '@/app/styles/loading.module.css'

export default function Loading (): React.ReactNode {
  return (
      <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
      </div>
  );
}
