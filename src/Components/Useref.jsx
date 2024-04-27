// import React , {useState , useEffect , useRef } from 'react';

// function App() {
//   const [data,setdata] = useState("");
//   const counter = useRef("");
//   useEffect(()=>{
//     counter.current = data;

//   },[data])

//   const formhandler = (e) =>{
//     setdata(e.target.value);
//   }

//   return (
//     <>
//     <input value={data} onChange={formhandler}/>
//     <h1>rendered {counter.current} times</h1>
    
//     </>
//   );
// }

// export default App;


// dom handling 



// import React , {useState , useEffect , useRef } from 'react';

// function App() {
//   const [data,setdata] = useState("");
//   const counter = useRef("");
//   const formhandler = (e) =>{
//     setdata(e.target.value);
//   }
//   const click = ()=>{
//     alert(counter.current.value);
//   }
//   return (
//     <>

//     <h1>rendered {counter.current} times</h1>
//     <input ref={counter} />
//     <button onClick={click}>click</button>
    
//     </>
//   );
// }

// export default App;


