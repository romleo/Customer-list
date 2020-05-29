import React from 'react';
import { useFormik } from 'formik';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.numberOfMonth) {
    errors.numberOfMonth = 'Required';
  } else if (values.numberOfMonth.length > 15) {
    errors.numberOfMonth = 'Must be 10 characters or less';
  }

  if (!values.numberOfNotes) {
    errors.numberOfNotes = 'Required';
  } else if (values.numberOfNotes.length > 20) {
    errors.numberOfNotes = 'Must be 20 characters or less';
  }

  
  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      numberOfMonth : '',
      numberOfNotes : '',
    },
    validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="numberOfMonth">Number Of Month</label>
      <input
        id="numberOfMonth"
        name="numberOfMonth"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.numberOfMonth ? <div>{formik.errors.numberOfMonth}</div> : null}
      <label htmlFor="numberOfNotes">Number Of Notes</label>
      <input
        id="numberOfNotes"
        name="numberOfNotes"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.numberOfNotes}
      />
      {formik.errors.numberOfNotes ? <div>{formik.errors.numberOfNotes}</div> : null}
      <button type="submit">Submit</button>
    </form>
  
  );
};

export default SignupForm;