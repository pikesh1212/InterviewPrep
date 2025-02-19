import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from '../Redux/counterSlice'

const Counter=()=>{
    const count = useSelector(state=>state.counterReducer.count)
    const dispatch = useDispatch()
    return(
        <div>
            <span>Count: {count}</span>
            <button  className="outline-none" onClick={()=>dispatch(increment())} >Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}
export default Counter;