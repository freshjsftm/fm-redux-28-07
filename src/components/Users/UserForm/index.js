import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as ActionsUserCreators from "../../../actions/userCreators";

const UserForm = (props) => {
  const { createUserRequest } = bindActionCreators(
    ActionsUserCreators,
    useDispatch()
  );
  const onSubmit = (values, formikBag) => {
    createUserRequest({values});
    formikBag.resetForm();
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthday: "",
        isMale: true,
      }}
    >
      <Form>
        <Field name="firstName" placeholder="firstName" />
        <Field name="lastName" placeholder="lastName" />
        <Field name="email" placeholder="email" />
        <Field name="password" placeholder="password" />
        <Field name="birthday" placeholder="birthday" />
        <Field name="isMale" type="checkbox" /> male
        <input type="submit" value="Add user" />
      </Form>
    </Formik>
  );
};
export default UserForm;
