// src/components/RegisterForm.js
import React from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import { Person, Email, Phone, Home, Lock } from '@mui/icons-material';
import useForm from '../Hooks/useregister';
import validate from '../Validations/Validation';
import './RegisterForm.css'; 

const RegisterForm = ({ onSubmit }) => {
  const initialValues = { name: '', email: '', password: '', mobile: '', address: '' };
  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(initialValues, validate);

  const handleFormSubmit = () => {
    console.log({
      name: values.name,
      email: values.email,
      password: values.password,
      mobile: values.mobile,
      address: values.address,
    });
    
    alert('Form Submitted Successfully');
    
    resetForm();
    onSubmit();  // Trigger loader and Thank You page
  };

  return (
        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <div className="text-field">
            <TextField
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </div>
          
          <div className="text-field">
            <TextField
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </div>
          
          <div className="text-field">
            <TextField
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </div>

          <div className="text-field">
            <TextField
              label="Mobile Number"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              error={Boolean(errors.mobile)}
              helperText={errors.mobile}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </div>
          
          <div className="text-field">
            <TextField
              label="Address"
              name="address"
              value={values.address}
              onChange={handleChange}
              error={Boolean(errors.address)}
              helperText={errors.address}
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Home />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </div>
          
          <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit(handleFormSubmit)}
      >
        Register
      </Button>
        </form>
      )
    }

export default RegisterForm;