import React  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { INC ,DEC} from './States/Reducer/index';

function App() {

  const currentState = useSelector((state)=> state.number);
  const dispatch = useDispatch();


  return (
    <>
    <div className=''>
      <h1>{currentState}</h1>
       
        <button onClick={()=>dispatch(INC())}>INC</button>
        <button onClick={()=>dispatch(DEC())}>DEC</button>
    </div>
    </>
  );
}

export default App;

