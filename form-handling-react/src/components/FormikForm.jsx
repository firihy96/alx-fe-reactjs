import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from 'formikForm.js'


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
      {({ values, handleChange }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field
              name="username"
              type="text"
              value={values.username} // Explicitly bind value
              onChange={handleChange} // Explicitly handle changes
            />
            <ErrorMessage name="username" component="span" />
          </div>
          <div>
            <label>Email:</label>
            <Field
              name="email"
              type="email"
              value={values.email} // Explicitly bind value
              onChange={handleChange} // Explicitly handle changes
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <label>Password:</label>
            <Field
              name="password"
              type="password"
              value={values.password} // Explicitly bind value
              onChange={handleChange} // Explicitly handle changes
            />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
