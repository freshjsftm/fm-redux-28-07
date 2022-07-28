import React from "react";
import { connect } from "react-redux";

function App(props) {
  const { count, dispatch } = props;
  const increment = () => {
    const action = { type: "INCREMENT" };
    dispatch(action);
  };
  const decrement = () => {
    const action = { type: "DECREMENT" };
    dispatch(action);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);


/*
store - общее хранилище js object
reducer - чистая функция (state,action)=> newState
dispatch - функция-передавальщик action 
action - object {type:''}
connect - HOC, которая подмешивает store
mapStateToProps - функция которая откусывает нужное состояние
Provider - компонент, который делится сторой
*/
