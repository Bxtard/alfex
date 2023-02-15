import styles from '../page.module.css';
import Image from 'next/image';

const Info = () => {
  return (
    <div>
      <h2 className={styles.clientTitle}>Nuestros clientes</h2>
      <ul className={styles.clients}>
        <li className={styles.client}>
          <Image src='/favicon.ico' alt='logo' width={100} height={100} />
          <h3>Plazuela del mar</h3>
        </li>
        <li className={styles.client}>
          <Image src='/favicon.ico' alt='logo' width={100} height={100} />
          <h3>Portal II (villa campestre)</h3>
        </li>
        <li className={styles.client}>
          <Image src='/favicon.ico' alt='logo' width={100} height={100} />
          <h3>Torres de villa campestre</h3>
        </li>
        <li className={styles.client}>
          <Image src='/favicon.ico' alt='logo' width={100} height={100} />
          <h3>Holding</h3>
        </li>
        <li className={styles.client}>
          <Image src='/favicon.ico' alt='logo' width={100} height={100} />
          <h3>Bristol</h3>
        </li>
      </ul>
      <h2 className={styles.clientTitle}>Reseñas</h2>
    </div>
  );
};

export default Info;
