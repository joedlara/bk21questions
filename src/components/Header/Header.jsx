import styles from "./Header.module.css"

const Header = () => {
  const scrollToSurvey = (e) => {
    e.preventDefault()
    const surveyElement = document.getElementById("assessmentForm")
    if (surveyElement) {
      surveyElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>Brandklout</div>
        <a
          href="#assessmentForm"
          onClick={scrollToSurvey}
          className={styles.bookCallBtn}
        >
          Start Survey
        </a>
      </div>
    </div>
  )
}

export default Header
