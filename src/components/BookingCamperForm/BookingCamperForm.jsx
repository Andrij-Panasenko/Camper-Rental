import { Formik } from "formik";
import { Field, Form, FormSubtitle, FormTitle, SendButton, Textarea } from "./BookingCamperForm.styled";

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
          onSubmit={(values) => console.log(values)}>
          <Form>
            <FormTitle>Book your campervan now</FormTitle>
            <FormSubtitle>
              Stay connected! We are always ready to help you.
            </FormSubtitle>
            <Field name="name" placeholder="Name" type="text" required />

            <Field name="email" placeholder="Email" type="email" required />

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
