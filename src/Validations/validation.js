// src/Validations/Validation.js
const validate = (values) => {
  let errors = {};

  // Name validation
  if (!values.name) {
    errors.name = "Name is required";
  } else if (/[^a-zA-Z\s]/.test(values.name)) {
    errors.name = "Name cannot contain special characters";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Password must contain at least one lowercase letter";
  } else if (!/[!@#$%^&*]/.test(values.password)) {
    errors.password = "Password must contain at least one special character";
  }

  // Mobile number validation
  if (!values.mobile) {
    errors.mobile = "Mobile number is required";
  } else if (!/^\d{10}$/.test(values.mobile)) {
    errors.mobile = "Mobile number must be 10 digits";
  }

  // Address validation
  if (!values.address) {
    errors.address = "Address is required";
  }

  return errors;
};

export default validate;
