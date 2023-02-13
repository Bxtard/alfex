import Logo from './svgr/logo';
import styles from '../page.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuLink}>blog</li>
        <li className={styles.menuLink}>servicios</li>
        <li className={styles.menuLink}>quien somos</li>
        <li className={styles.menuLink}>contactanos</li>
      </ul>
    </nav>
  );
};

export default Navbar;
