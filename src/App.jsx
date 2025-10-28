import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProgressBar from './components/Progress/ProgressBar';
import VideoSection from './components/VideoSection/VideoSection';
import AssessmentSection from './components/Assessment/AssessmentSection';
import ContactModal from './components/Modal/ContactModal';
import { useAssessment } from './hooks/useAssessment';
import './styles/global.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    answers,
    errors,
    totalQuestions,
    updateAnswer,
    validateAssessment,
    getAssessmentData,
  } = useAssessment();

  const answeredCount = Object.keys(answers).length;

  const handleAnswerChange = (questionNumber, value) => {
    updateAnswer(questionNumber, value);
  };

  const handleSubmit = (questionsRef) => {
    const { isValid, firstErrorQuestion } = validateAssessment();

    if (isValid) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      // Scroll to first error
      const firstErrorElement = questionsRef.current[firstErrorQuestion];
      if (firstErrorElement) {
        setTimeout(() => {
          const yOffset = -150;
          const y =
            firstErrorElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <ProgressBar completed={answeredCount} total={totalQuestions} />
      <Header />
      <Hero />

      <div className="container">
        <VideoSection />
        <AssessmentSection
          answers={answers}
          errors={errors}
          onAnswerChange={handleAnswerChange}
          onSubmit={handleSubmit}
        />
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        assessmentData={getAssessmentData()}
      />
    </>
  );
}

export default App;
