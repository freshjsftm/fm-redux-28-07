import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { createTask } from "../../../actions/taskCreators";

const TaskForm = (props) => {
  const {createTaskDispatch} = props;
  const handlerSubmit = (values, formikBag) => {
    createTaskDispatch(values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{ body: "", isDone: false }}
      onSubmit={handlerSubmit}
    >
      <Form>
        <Field name="body" />
        <input type="submit" value="Add task" />
        <input type="reset" value="Clear task" />
      </Form>
    </Formik>
  );
};
const mapDispatchToProps = (dispatch) => ({
  createTaskDispatch: (values) => dispatch(createTask(values)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
