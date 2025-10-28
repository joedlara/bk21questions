import { CALENDLY_URL } from '../../utils/constants';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Be Found <span className={styles.gradientText}>Everywhere</span><br />
          Your Patients Search
        </h1>
        <p className={styles.heroSubtitle}>
          Before we connect, we gather{' '}
          <span className={styles.gradientText}>valuable insight</span> to
          create a strategy tailored specifically for your success.
        </p>
        <div className={styles.heroButtonContainer}>
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
    </div>
  );
};

export default Hero;
