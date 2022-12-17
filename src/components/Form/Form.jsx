import { Formik, Form, Field } from 'formik';

export const SearchForm = ({ onSubmit }) => {
  const initialValues = { input: '' };
  const formSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={formSubmit}>
      <section>
        <Form>
          <Field type="text" name="input" />
          <button type="submit">Search</button>
        </Form>
      </section>
    </Formik>
  );
}
