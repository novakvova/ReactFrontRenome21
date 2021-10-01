import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../common/MyTextInput';
import MyCheckbox from '../../common/MyCheckbox';





// And now we can use these
const LoginPage = () => {
  return (
    <>
      <h1>Вхід на сайт!</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          
          <MyTextInput
            label="Пароль"
            name="password"
            type="password"
            placeholder="Пароль"
          />
          

          <MyCheckbox id="acceptedTerms" name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginPage;