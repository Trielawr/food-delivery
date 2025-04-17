import React from 'react';
import './NearestRestaurants.scss';
import '../Button/Button.scss';
import Button from '../Button/Button';
import { useFormik } from "formik";
import { validationSchema } from '../../assets/utilits';
import { useState } from 'react';

const NearestRestaurants = () => {

  const [adress, setAdress] = useState('');
  const [disabled, setDisabled] = useState('false');
  
  const onChangeForm = () => {
    setAdress('');
    setDisabled('true');
  }

  const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
          email: adress || ""
          },
          validationSchema: validationSchema,
      onSubmit: () => {
        onChangeForm();
        formik.resetForm();
        }
      }     
    )


  return (
    <div className='nearest-bg'>
      <div className='nearest container'>
        <div className='nearest-text'>
          <h1 className='nearest-text-logo'>Your nearest restaurants</h1>
          <p className='nearest-text-item'>Each kitchen works with its own delivery area to deliver food to you as soon as possible</p>
        </div>
        <div className='nearest-adress'>
          <form onSubmit={ formik.handleSubmit }>
            <input
              className='nearest-adress-input'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name= "email"
              type='email'
              value={ formik.values.email }
              placeholder='Enter delivery adress' />
              <Button
                className='yellow-btn'
                text='sent'
                type='submit'
                disabled={ formik.errors.email }
            />
             { (formik.errors.email && formik.touched.email) ? <p className='errors'>{ formik.errors.email } </p>: null }
          </form>
        </div>
      </div>
    </div>
  )
}

export default NearestRestaurants;