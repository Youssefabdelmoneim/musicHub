import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
  },
});
const store = configureStore({ reducer: { counter: counterSlice.reducer } });

export function CounterApp() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.counter);
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <button
        onClick={() => store.dispatch(counterSlice.actions.increment())}
        className="flex cursor-pointer items-center justify-center bg-fuchsia-400 p-10 text-8xl hover:bg-fuchsia-800"
      >
        {count}
      </button>
    </div>
  );
}

export default function Test() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
