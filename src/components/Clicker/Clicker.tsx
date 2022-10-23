// type Product = {
//   id: string;
//   name: string
// }

// type Response = {
//   isLoading: true,
// } | {
//   isLoading: false,
//   data: Product,
// } | {
//   isLoading: false,
//   error: Error
// }
import { useReducer } from 'react';

type State = {
  count: number;
}

enum ActionType {
  INCREASE = 'increase',
  DECREASE = 'decrease',
}

type Action = {
  type: ActionType.INCREASE,
  payload: number,
} | {
  type: ActionType.DECREASE,
  payload: number,
}

const initialState: State = {
  count: 0,
}

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case ActionType.INCREASE:
      return { count: state.count + payload };
    case ActionType.DECREASE:
      return { count: state.count - payload };
    default:
      return state;
  }
}

const Clicker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Counter value: {state.count}</p>
      <button onClick={() => dispatch({ type: ActionType.DECREASE, payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: ActionType.INCREASE, payload: 1 })}>+</button>
    </div>
  );
}

export { Clicker };
