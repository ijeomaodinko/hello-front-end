import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../redux/greetings";


const Greetings = () => {
    const dispatch = useDispatch()
    const greetings = useSelector((state) => state.greetingReducer);

useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <>
    <div>
    
   <div>
     {greetings.map((greeting) => (
        <h3 key={greeting.id}
        >{greeting.greeting}</h3>
     ))}
    </div>
    </div>
    <h1>Random Greetings</h1>
    <button onClick={()=> dispatch(fetchGreeting())}>click me</button>
    </>
  );
};
export default Greetings
