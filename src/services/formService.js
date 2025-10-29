import { FORMSPREE_ENDPOINT } from "../utils/constants"

export const submitAssessment = async (formData, assessmentData) => {
  const payload = {
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    ...assessmentData,
    submittedAt: new Date().toISOString(),
  }

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || "Submission failed")
  }

  return await response.json()
}
