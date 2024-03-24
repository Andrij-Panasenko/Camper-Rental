import { Formik } from "formik";
import {
  Field,
  Form,
  FormSubtitle,
  FormTitle,
  SendButton,
  Textarea,
  ErrorMessage,
} from "./BookingCamperForm.styled";

import * as Yup from "yup";

const bookingCamperFormSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is too short").required("Name id needed"),
  email: Yup.string().email().required("Please, enter your email"),
  date: Yup.string().date().required("Please, put in desired date"),
  message: Yup.string(),
});

export const BookingCamperForm = () => {
  return (
    <>
      <div>
        <Formik
          initialValues={{
            name: "",
            date: "",
            email: "",
            message: "",
          }}
          validationSchema={bookingCamperFormSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
          }}>
          <Form>
            <FormTitle>Book your campervan now</FormTitle>
            <FormSubtitle>
              Stay connected! We are always ready to help you.
            </FormSubtitle>
            <ErrorMessage name="name" component="span" />
            <Field name="name" placeholder="Name" type="text" required />

            <ErrorMessage name="email" component="span" />
            <Field name="email" placeholder="Email" type="email" required />

            <ErrorMessage name="date" component="span" />
            <Field
              name="date"
              placeholder="Booking date"
              type="date"
              required
            />
            <Textarea name="message" as="textarea" placeholder="Comment" />
            <SendButton type="submit">Send</SendButton>
          </Form>
        </Formik>
      </div>
    </>
  );
};
