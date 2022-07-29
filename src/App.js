import React from "react";
import { connect } from "react-redux";
import * as CounterCreators from "./actions/counterCreators";

function App(props) {
  const { count, step, increment, decrement, setStep } = props;
  const handlerStep = ({ target: { value } }) => { setStep(Number(value));  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="number" value={step} onChange={handlerStep} />
    </div>
  );
}

const mapStateToProps = ({ count, step }) => ({ count, step });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(CounterCreators.increment()),
  decrement: () => dispatch(CounterCreators.decrement()),
  setStep: (newStep) => dispatch(CounterCreators.setStep(newStep)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
store - общее хранилище js object
reducer - чистая функция (state,action)=> newState
dispatch - функция-передавальщик action 
action - object {type:''}
connect - HOC, которая подмешивает store
mapStateToProps - функция которая откусывает нужное состояние
Provider - компонент, который делится сторой
*/
