import { useState } from 'react';
import { CALENDLY_URL } from '../../utils/constants';
import { submitAssessment } from '../../services/formService';
import SuccessMessage from './SuccessMessage';
import styles from './Modal.module.css';

const ContactModal = ({ isOpen, onClose, assessmentData }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    clinicAddress: '',
    clinicCity: '',
    clinicState: '',
    clinicZip: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'clinicAddress',
      'clinicCity',
      'clinicState',
      'clinicZip',
    ];
    const missingFields = requiredFields.filter((field) => !formData[field].trim());

    if (missingFields.length > 0) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitAssessment(formData, assessmentData);
      setShowSuccess(true);

      // Redirect after 5 seconds
      setTimeout(() => {
        window.location.href = CALENDLY_URL;
      }, 5000);
    } catch (error) {
      console.error('Submission error:', error);
      alert(
        'There was an error submitting your assessment. Please check your internet connection and try again.'
      );
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.modal} ${styles.active}`} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        {showSuccess ? (
          <SuccessMessage />
        ) : (
          <>
            <div className={styles.modalHeader}>
              <h3>Almost There!</h3>
              <p>
                We'll send your detailed assessment results and next steps to your email
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
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
                <label htmlFor="clinicAddress">Clinic Address *</label>
                <input
                  type="text"
                  id="clinicAddress"
                  name="clinicAddress"
                  placeholder="Street Address"
                  value={formData.clinicAddress}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="clinicCity">City *</label>
                <input
                  type="text"
                  id="clinicCity"
                  name="clinicCity"
                  placeholder="City"
                  value={formData.clinicCity}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <div className={styles.formGroup} style={{ flex: 2 }}>
                  <label htmlFor="clinicState">State *</label>
                  <input
                    type="text"
                    id="clinicState"
                    name="clinicState"
                    placeholder="State"
                    value={formData.clinicState}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup} style={{ flex: 1 }}>
                  <label htmlFor="clinicZip">ZIP Code *</label>
                  <input
                    type="text"
                    id="clinicZip"
                    name="clinicZip"
                    placeholder="ZIP"
                    value={formData.clinicZip}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={styles.modalSubmitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
