import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = (values) => {
    console.log('Form submitted successfully:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label>Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="span" />
          </div>
          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
