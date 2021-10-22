import React, {useRef, useState} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../common/MyTextInput';
import MyCheckbox from '../../common/MyCheckbox';
import { useDispatch } from 'react-redux';
import { authUser } from '../../../actions/auth';
import accountService from '../../../services/account.service';
//import { useHistory } from 'react-router-dom';
import MyPhotoInput from '../../common/MyPhotoInput';
import { push } from "connected-react-router";


// And now we can use these
const LoginPage = () => {

    const dispatch=useDispatch();
    //const history = useHistory();

    const formikRef = useRef();
    const titleRef = useRef();
    const [invalid, setInvalid] = useState("");

  return (
    <>
      <h1>Вхід на сайт!</h1>
      {invalid &&
        <div ref={titleRef} className="alert alert-danger">
          {invalid}
        </div>
      }
      
      <Formik
        innerRef={formikRef}
        initialValues={{
          email: '',
          password: '',
          acceptedTerms: false, // added for our checkbox
          photo: null
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
              var formData = new FormData();
              Object.entries(values).forEach(([key, value]) => formData.append(key, value));
                const result = await accountService.login(formData);
                const {token} = result.data;
                localStorage.authToken=token;
                dispatch(authUser(token));
                //history.push("/");
                dispatch(push("/"));
            } catch (badresponse) {
              setInvalid(badresponse.response.data.invalid);
              titleRef.current.scrollIntoView({ behavior: 'smooth' });
            }
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

          <MyPhotoInput
            field="photo"
            formikRef={formikRef} />

          <MyPhotoInput
            field="girl"
            formikRef={formikRef} />

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