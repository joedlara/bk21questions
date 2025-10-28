import { FORMSPREE_ENDPOINT } from '../utils/constants';

export const submitAssessment = async (formData, assessmentData) => {
  const fullAddress = `${formData.clinicAddress}, ${formData.clinicCity}, ${formData.clinicState} ${formData.clinicZip}`;
  
  const payload = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    clinicAddress: formData.clinicAddress,
    clinicCity: formData.clinicCity,
    clinicState: formData.clinicState,
    clinicZip: formData.clinicZip,
    fullAddress,
    ...assessmentData,
    submittedAt: new Date().toISOString(),
  };

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Submission failed');
  }

  return await response.json();
};
