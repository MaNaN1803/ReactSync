import React , {useState , createContext} from 'react';
import ComA from './Components/ComA';

const Appstate = createContext();


function App() {
  const [data,setdata] = useState("hellocontextapi")
  return (
    <>
    <Appstate.Provider value={data}>
    <ComA/>
    </Appstate.Provider>
    </>
  );
}

export default App;
export {Appstate}
