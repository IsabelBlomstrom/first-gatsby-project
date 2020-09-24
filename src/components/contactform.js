import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contactform = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          Name:
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />
          Email:
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          Message:
          <textarea name="text" rows="10" cols="30" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Contactform;
