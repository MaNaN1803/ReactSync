
import './App.css';
import Top from './Components/Top';
import data from './data.json';
import React , {useState} from 'react';


function Incdec() {

  const [count, setCount] = useState(1);

  function inc(n){
    setCount(count+n);
  }
  function dec(){
    setCount(count-1);
  }

  return (
    <div className="App">
      <Top/>
      <div className='justify-center flex bg-black text-white'>
      <button onClick={()=>inc(2)} className='border-white'>INC</button>
        <h1>
          {count}
        </h1>
        
        <button onClick={dec}className='border-white'>DEC</button>
      </div>
    </div>
  );
}


export default Incdec;
