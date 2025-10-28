import { CALENDLY_URL } from '../../utils/constants';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>Brandklout</div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookCallBtn}
        >
          Schedule a Meeting
        </a>
      </div>
    </div>
  );
};

export default Header;
