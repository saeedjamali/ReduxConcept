import { counterDecrement, counterIncrement, counterSetZero } from '../Redux/Counter/ActionTypes.js'
import { incrementAction, decrementAction, setZeroAction } from '../Redux/Counter/ActionCreators.js'


const decBtn = document.querySelector(".dec");
const resetBtn = document.querySelector(".reset");
const incBtn = document.querySelector(".inc");

const numberElem = document.querySelector("#num");

// Declare Counter Reducer
const counterReducer = (state = 0, action) => {

  switch (action.type) {
    case counterIncrement: { return state + 1 }
    case counterDecrement: { return state - 1 }
    case counterSetZero: { return 0 }
    default: { return state }
  }
};


const counterStore = Redux.createStore(counterReducer);
decBtn.addEventListener('click', () => {
counterStore.dispatch(decrementAction());
numberElem.innerHTML = counterStore.getState();
});

resetBtn.addEventListener('click', () => {
  counterStore.dispatch(setZeroAction());
  numberElem.innerHTML = counterStore.getState();
});
incBtn.addEventListener('click', () => {
  counterStore.dispatch(incrementAction());
  numberElem.innerHTML = counterStore.getState();
});