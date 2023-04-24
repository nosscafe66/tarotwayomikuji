import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { AuthButton } from '@/components/AuthButton/authbutton';
import { Header } from '@/components/Header/header';

export default function Home({ posts }) {
  return (
    <div>
      <Header />
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Kashiopia Project
        </h1>
        <Image className={styles.mainimage} src="/img/kashiopia.png" alt="street" width="1500" height="900" layout="responsive" /><br />
        <div className={styles.image}>
          <ul>
            <li><Image className={styles.mainimage} src="/img/kashiopia.png" alt="street" width="1500" height="900" layout="responsive" /></li><br />
            <li> <Image className={styles.mainimage} src="/img/kashiopia.png" alt="street" width="1500" height="900" layout="responsive" /></li>
          </ul>
        </div>
      </main>
    </div>
    </div>
  );
}
