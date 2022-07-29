import React from "react";
import Counter from "./components/Counter";
import TaskForm from "./components/Todo/TaskForm";
import TasksList from "./components/Todo/TasksList";


function App(props) {
  return (
    <>
      <Counter />
      <hr /><hr /><hr />
      <TaskForm />
      <TasksList />
    </>
  );
}


export default App;

/*
store - общее хранилище js object
reducer - чистая функция (state,action)=> newState
dispatch - функция-передавальщик action 
action - object {type:''}
connect - HOC, которая подмешивает store
mapStateToProps - функция которая откусывает нужное состояние
Provider - компонент, который делится сторой
*/
