import styles from './ProgressBar.module.css';

const ProgressBar = ({ completed, total }) => {
  const percentage = Math.round((completed / total) * 100);

  return (
    <>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
      </div>
      <div className={styles.progressText}>
        {completed}/{total} Completed
      </div>
    </>
  );
};

export default ProgressBar;
