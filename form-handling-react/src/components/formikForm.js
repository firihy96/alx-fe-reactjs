import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define initial form values
const initialValues = {
  username: '',
  email: '',
  password: '',
};

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    resetForm(); // Reset form fields
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />
            <ErrorMessage name="username" component="span" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="span" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="span" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
