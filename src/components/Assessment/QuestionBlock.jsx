import styles from './Assessment.module.css';

const QuestionBlock = ({ questionNumber, question, answer, error, onAnswerChange }) => {
  return (
    <div className={styles.questionBlock}>
      <div className={styles.questionText}>
        <span className={styles.questionNumber}>{questionNumber}</span>
        {question}
      </div>
      <div className={styles.answerOptions}>
        <div className={styles.radioOption}>
          <input
            type="radio"
            id={`q${questionNumber}-yes`}
            name={`question${questionNumber}`}
            value="yes"
            checked={answer === 'yes'}
            onChange={(e) => onAnswerChange(questionNumber, e.target.value)}
          />
          <label htmlFor={`q${questionNumber}-yes`}>Yes</label>
        </div>
        <div className={styles.radioOption}>
          <input
            type="radio"
            id={`q${questionNumber}-no`}
            name={`question${questionNumber}`}
            value="no"
            checked={answer === 'no'}
            onChange={(e) => onAnswerChange(questionNumber, e.target.value)}
          />
          <label htmlFor={`q${questionNumber}-no`}>No</label>
        </div>
      </div>
      {error && (
        <div className={`${styles.errorMessage} ${styles.show}`}>
          ⚠️ This question is required
        </div>
      )}
    </div>
  );
};

export default QuestionBlock;
