import styles from './styles/mainPage.module.css'
import HomePage from './components/homePage';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  )
}
