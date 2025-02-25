import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count: {count}</h2>

      <button
        type="button"
        onClick={() => dispatch(increment())}
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch(decrement())}
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Decrement
      </button>
   
    </div>
  );
};
export default Counter;
