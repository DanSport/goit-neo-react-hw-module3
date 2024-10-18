import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(50, "Must be 50 characters or less")
          .required("Required"),
        number: Yup.string()
          .min(3, "Must be at least 3 characters")
          .matches(
            /^\d{3}-\d{2}-\d{2}$/,
            "Phone number must be in the format xxx-xx-xx"
          )
          .required("Required"),
      })}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
      }}
    >
      {({ errors, touched, handleBlur }) => (
        <Form className={styles.form}>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" onBlur={handleBlur} />
          {touched.name && errors.name && (
            <div className={styles.error}>{errors.name}</div>
          )}
          <label htmlFor="number">Number</label>
          <Field name="number" type="text" onBlur={handleBlur} />
          {touched.number && errors.number && (
            <div className={styles.error}>{errors.number}</div>
          )}

          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
