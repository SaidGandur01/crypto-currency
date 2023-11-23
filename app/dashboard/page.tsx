import TableComponent from '../components/dashboard/tableComponent';
import styles from '../styles/dashboardPage.module.css'

export default function Dashboard (): React.ReactNode {
  return (
    <div className={styles.dashboardPage}>
      <TableComponent />
    </div>
  );
}
