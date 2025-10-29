import styles from "./Hero.module.css"

const Hero = () => {
  const scrollToSurvey = (e) => {
    e.preventDefault()
    const surveyElement = document.getElementById("assessmentForm")
    if (surveyElement) {
      surveyElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Be Found <span className={styles.gradientText}>Everywhere</span>
          <br />
          Your Patients Search
        </h1>
        <p className={styles.heroSubtitle}>
          Before we connect, we gather{" "}
          <span className={styles.gradientText}>valuable insight</span> to
          create a strategy tailored specifically for your success.
        </p>
        <div className={styles.heroButtonContainer}>
          <a
            href="#assessmentForm"
            onClick={scrollToSurvey}
            className={styles.bookCallBtn}
          >
            Start Survey
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
