import { useState, useCallback } from 'react';
import { questionSections } from '../data/questions';

export const useAssessment = () => {
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});

  // Calculate total questions
  const totalQuestions = questionSections.reduce(
    (sum, section) => sum + section.questions.length,
    0
  );

  // Update answer for a specific question
  const updateAnswer = useCallback((questionNumber, value) => {
    setAnswers((prev) => ({
      ...prev,
      [`question_${questionNumber}`]: value,
    }));

    // Clear error for this question
    if (errors[questionNumber]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[questionNumber];
        return newErrors;
      });
    }
  }, [errors]);

  // Validate all questions are answered
  const validateAssessment = useCallback(() => {
    const newErrors = {};
    let firstErrorQuestion = null;

    for (let i = 1; i <= totalQuestions; i++) {
      if (!answers[`question_${i}`]) {
        newErrors[i] = true;
        if (firstErrorQuestion === null) {
          firstErrorQuestion = i;
        }
      }
    }

    setErrors(newErrors);
    return {
      isValid: Object.keys(newErrors).length === 0,
      firstErrorQuestion,
    };
  }, [answers, totalQuestions]);

  // Get all answers in the format needed for submission
  const getAssessmentData = useCallback(() => {
    const data = {};
    for (let i = 1; i <= totalQuestions; i++) {
      data[`question_${i}`] = answers[`question_${i}`] || 'not answered';
    }
    return data;
  }, [answers, totalQuestions]);

  // Calculate completion percentage
  const completionPercentage = useCallback(() => {
    const answeredCount = Object.keys(answers).length;
    return Math.round((answeredCount / totalQuestions) * 100);
  }, [answers, totalQuestions]);

  return {
    answers,
    errors,
    totalQuestions,
    updateAnswer,
    validateAssessment,
    getAssessmentData,
    completionPercentage,
  };
};
