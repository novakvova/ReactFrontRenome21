import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../common/MyTextInput';
import MyCheckbox from '../../common/MyCheckbox';
import { useDispatch } from 'react-redux';
import { authUser } from '../../../actions/auth';
import accountService from '../../../services/account.service';
import { useHistory } from 'react-router-dom';


// And now we can use these
const LoginPage = () => {

    const dispatch=useDispatch();
    const history = useHistory();

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
            .email('Не коректно вказана пошта')
            .required('Вкажіть пошту'),
          password: Yup.string()
            .required('Вкажіть пароль'),
          acceptedTerms: Yup.boolean()
            .required("Обов'язкове поле")
            .oneOf([true], 'Потрібно поставити галочку.'),
        })}
        onSubmit={ async (values, { setSubmitting }) => {
            try {
                const result = await accountService.login(values);
                const {token} = result.data;
                localStorage.authToken=token;
                authUser(token, dispatch);
                history.push("/");
            } catch (badresponse) {
            }
            //authUser(token, this.props.dispatch);
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //   }, 400);
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
            Я згідний із правилами сайту
          </MyCheckbox>

          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginPage;