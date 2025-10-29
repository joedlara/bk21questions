import { useState } from "react"
import { submitAssessment } from "../../services/formService"
import SuccessMessage from "./SuccessMessage"
import styles from "./Modal.module.css"

const ContactModal = ({ isOpen, onClose, assessmentData }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate required fields
    const requiredFields = ["fullName", "email", "phone"]
    const missingFields = requiredFields.filter(
      (field) => !formData[field].trim()
    )

    if (missingFields.length > 0) {
      alert("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    try {
      await submitAssessment(formData, assessmentData)
      setShowSuccess(true)
    } catch (error) {
      console.error("Submission error:", error)
      alert(
        "There was an error submitting your assessment. Please check your internet connection and try again."
      )
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={`${styles.modal} ${styles.active}`}
      onClick={handleBackdropClick}
    >
      <div className={styles.modalContent}>
        {showSuccess ? (
          <SuccessMessage />
        ) : (
          <>
            <div className={styles.modalHeader}>
              <h3>Almost There!</h3>
              <p>
                We'll send your detailed assessment results and next steps to
                your email
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className={styles.modalSubmitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Assessment"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default ContactModal
