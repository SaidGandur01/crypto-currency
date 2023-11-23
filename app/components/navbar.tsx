import Image from 'next/image';
import styles from '../styles/navbar.module.css';
import logo from '../../public/images/logo.png';
import Navigation from './navigation';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftItems}>
        <div>
          <Image src={logo} alt='logo-image' width={80} height={70} />
        </div>
        <h1 className={styles.navbarInfo}>All the crypto info you need</h1>
      </div>
      <div className={styles.leftItems}>
        <Navigation />
      </div>
    </nav>
  );
}
