import React from 'react'

import Button from '@mui/material/Button'

import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  password: yup.string()
    .required('Password is a required field') 
    .min(8, 'Your password should have at least 8 characters')
})

const FormPage = () => {
  const { register, handleSubmit, formState: { errors }} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <div
      className="flex flex-col items-center max-w-xs"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          {...register('firstName')}
          type='text'
          id='firstName'
          name='firstName'
          label='First Name'
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register('lastName')}
          type='text'
          id='lastName'
          name='lastName'
          label='Last Name'
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <Input
          {...register('email')}
          type='email'
          id='email'
          name='email'
          label='Email'
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <Input
          {...register('password')}
          type='password'
          id='password'
          name='password'
          label='Password'
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
        Submit
        </Button>
      </form>
    </div>
  )
}

export default FormPage
