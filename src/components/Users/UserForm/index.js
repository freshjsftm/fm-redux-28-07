import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as ActionsUserCreators from "../../../actions/userCreators";

const UserForm = (props) => {
  const {createUserRequestDispatch} = props;
  const onSubmit = (values, formikBag) => {
    createUserRequestDispatch(values);
    formikBag.resetForm();
  };
  return (
    <Formik onSubmit={onSubmit} initialValues={{
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

const mapDispatchToProps = (dispatch)=>({
  createUserRequestDispatch:(values)=>
    dispatch(ActionsUserCreators.createUserRequest(values))
})

export default connect(null,mapDispatchToProps)(UserForm);
