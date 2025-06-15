export const validateUniversitySubmitForm = (formData, setErrors) => {
  const newErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex =
    /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/;

  if (!formData.firstName.trim())
    newErrors.firstName = "First name is required";
  if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
  if (!formData.dob) newErrors.dob = "Date of birth is required";

  if (!formData.mobile.trim()) {
    newErrors.mobile = "Mobile number is required";
  } else if (!mobileRegex.test(formData.mobile)) {
    newErrors.mobile = "Please enter a valid mobile number";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Please enter a valid email";
  }

  if (!formData.city.trim()) newErrors.city = "City is required";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


export const validateInquiryForm = (formData, setErrors) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex =
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{3,6}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "mobile number is required";
    } else if (!phoneRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid phone number";
    }
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };