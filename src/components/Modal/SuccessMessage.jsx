import styles from './Modal.module.css';

const SuccessMessage = () => {
  return (
    <div className={`${styles.successMessage} ${styles.active}`}>
      <div className={styles.successIcon}>✓</div>
      <h3>Thank You!</h3>
      <p>We've received your assessment and will get back to you soon.</p>
      <p style={{ marginTop: '20px' }}>
        <strong>We encourage you to schedule a meeting with us.</strong>
      </p>
      <p style={{ marginTop: '10px', fontSize: '15px', color: '#94a3b8' }}>
        Redirecting to scheduling page in 5 seconds...
      </p>
    </div>
  );
};

export default SuccessMessage;
