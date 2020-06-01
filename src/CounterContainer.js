
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: "ADD" }),
  remove: () => dispatch({ type: "REMOVE" }),
  add10: () => dispatch({ type: "ADD10" }),
  remove10: () => dispatch({ type: "REMOVE10" }),
  reset: () => dispatch({ type: "RESET" })

});

const CounterContainer = ({ counter, add ,remove , add10, remove10, reset }) => (
  <div>
    <p>{counter}</p>
    <button onClick={add}>+</button>
    <button onClick={remove}>-</button>
    <button onClick={add10}>+10</button>
    <button onClick={remove10}>-10</button>
    <button onClick={reset}>Reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
