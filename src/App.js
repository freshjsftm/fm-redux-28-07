import React from "react";
// import Counter from "./components/Counter";
// import TaskForm from "./components/Todo/TaskForm";
// import TasksList from "./components/Todo/TasksList";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

function App(props) {
  return (
    <>
      <UserForm />
      <UserList />
      {/* <Counter />
      <hr /><hr /><hr />
      <TaskForm />
      <TasksList /> */}
    </>
  );
}

export default App;