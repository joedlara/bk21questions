import styles from "./Modal.module.css"

const SuccessMessage = () => {
  const CALENDLY_URL = "https://calendly.com/mrhuynher/30min?month=2025-10"

  return (
    <div className={`${styles.successMessage} ${styles.active}`}>
      <div className={styles.successIcon}>✓</div>
      <h3>Thank You!</h3>
      <p>We've received your assessment and will get back to you soon.</p>
      <p style={{ marginTop: "20px" }}>
        <strong>We encourage you to schedule a meeting with us.</strong>
      </p>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.scheduleButton}
      >
        Schedule a Meeting
      </a>
    </div>
  )
}

export default SuccessMessage
