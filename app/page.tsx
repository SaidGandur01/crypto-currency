import styles from './styles/mainPage.module.css'
import HomePage from './components/homePage';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  )
}

{/* <Image
className={styles.logo}
src="/next.svg"
alt="Next.js Logo"
width={180}
height={37}
priority
/> */}
