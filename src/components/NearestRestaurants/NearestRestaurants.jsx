import React from 'react';
import './NearestRestaurants.scss';
import '../Button/Button.scss';
import Button from '../Button/Button';
import { useFormik } from "formik";
import * as Yup from "yup";

const NearestRestaurants = () => {

  const onChangeForm =  () => {
      const payload = {
         email: formik.values.email
      };
      console.log('payload', payload);
  }

  const validationSchema = Yup.object({
      email: Yup.string()
          .required("Не введена електроннаа адреса")
          .email("Некоректна електронна адреса")
  });

  const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
          email: ""|| ""
          },
          validationSchema: validationSchema,
      onSubmit: () => {
        onChangeForm();
        console.log('formik.values.adress', formik.values.email);
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
              value={ formik.values.adress }
              placeholder='Enter delivery adress' />
            <Button
              className='yellow-btn'
                text='sent'
                type='submit'
            />
             { (formik.errors.email && formik.touched.email) ? <p className='errors'>{ formik.errors.email } </p>: null }
          </form>
        </div>
      </div>
    </div>
  )
}

export default NearestRestaurants;