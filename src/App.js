import React from "react";
import {connect} from "react-redux";

function App(props) {
  //console.log(props);
  const {count} = props;
  return (
    <div>
      <h2>Count: {count}</h2>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

function mapStateToProps(state){return state}

// const withProps = connect(mapStateToProps);
// const AppWithProps = withProps(App);

export default connect(mapStateToProps)(App);
