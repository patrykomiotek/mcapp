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
import { KeyboardEventHandler, useReducer, useRef } from 'react';

type State = {
  count: number;
}

enum ActionType {
  INCREASE = 'increase',
  DECREASE = 'decrease',
  SET = 'set',
}

type Action = {
  type: ActionType.INCREASE,
  payload: number,
} | {
  type: ActionType.DECREASE,
  payload: number,
} | {
  type: ActionType.SET,
  payload: number,
};

const initialState: State = {
  count: 0,
}

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case ActionType.INCREASE:
      return { count: state.count + payload };
    case ActionType.DECREASE:
      return { count: state.count - payload };
    case ActionType.SET:
        return { count: payload };
    default:
      return state;
  }
}

const Clicker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fieldRef = useRef<HTMLInputElement>(null);

  const handleOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code === 'Enter' && fieldRef.current) {
      dispatch({ type: ActionType.SET, payload: parseInt(fieldRef.current.value, 10) });
    }
  }

  return (
    <div>
      <p>Counter value: {state.count}</p>
      <input ref={fieldRef} type="number" onKeyDown={handleOnKeyDown} />
      <button onClick={() => dispatch({ type: ActionType.DECREASE, payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: ActionType.INCREASE, payload: 1 })}>+</button>
    </div>
  );
}

export { Clicker };
