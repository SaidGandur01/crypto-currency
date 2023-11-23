import DashboardTopbar from "../components/dashboard/DashboardTopbar";
import styles from '../styles/dashboardLayout.module.css'

export default function DashboardLayout ({children}: { children: React.ReactNode }): React.ReactNode {
  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.dashboardTopbar}>
        <DashboardTopbar />
      </div>
      <div className={styles.dashboardContent}>
        {children}
      </div>
    </div>
  );
}