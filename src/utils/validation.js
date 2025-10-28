export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateZipCode = (zip) => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zip);
};

export const validateForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.firstName)) {
    errors.firstName = "First name is required";
  }

  if (!validateRequired(formData.lastName)) {
    errors.lastName = "Last name is required";
  }

  if (!validateRequired(formData.email)) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (!validateRequired(formData.clinicAddress)) {
    errors.clinicAddress = "Clinic address is required";
  }

  if (!validateRequired(formData.clinicCity)) {
    errors.clinicCity = "City is required";
  }

  if (!validateRequired(formData.clinicState)) {
    errors.clinicState = "State is required";
  }

  if (!validateRequired(formData.clinicZip)) {
    errors.clinicZip = "ZIP code is required";
  } else if (!validateZipCode(formData.clinicZip)) {
    errors.clinicZip = "Invalid ZIP code format";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
