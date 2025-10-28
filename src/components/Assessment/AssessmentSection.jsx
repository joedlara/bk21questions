import { useRef } from 'react';
import { questionSections } from '../../data/questions';
import QuestionBlock from './QuestionBlock';
import SectionHeader from './SectionHeader';
import styles from './Assessment.module.css';

const AssessmentSection = ({ answers, errors, onAnswerChange, onSubmit }) => {
  const questionsRef = useRef({});

  const handleSubmit = () => {
    onSubmit(questionsRef);
  };

  let questionNumber = 1;

  return (
    <div className={styles.assessmentForm}>
      <div className={styles.formIntro}>
        <h2>21 Question Assessment</h2>
        <p>
          Answer these yes or no questions to see how you can rank higher, grow
          faster, and consistently book more patients.
        </p>
      </div>

      <div id="assessmentForm">
        <div id="questionsContainer">
          {questionSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <SectionHeader title={section.title} />
              {section.questions.map((question, qIndex) => {
                const currentQuestionNumber = questionNumber++;
                return (
                  <div
                    key={qIndex}
                    ref={(el) => (questionsRef.current[currentQuestionNumber] = el)}
                  >
                    <QuestionBlock
                      questionNumber={currentQuestionNumber}
                      question={question}
                      answer={answers[`question_${currentQuestionNumber}`]}
                      error={errors[currentQuestionNumber]}
                      onAnswerChange={onAnswerChange}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <button type="button" className={styles.submitButton} onClick={handleSubmit}>
          Get My Results
        </button>
      </div>
    </div>
  );
};

export default AssessmentSection;
