import React , {useEffect,useState} from 'react';

import { FidgetSpinner } from 'react-loader-spinner';
function App() {

  const [loading,setloading] = useState(false);

  const [data,setData] = useState([]);

  useEffect(()=>{
    setloading(true);
    async function getdata(){
    const get = await fetch(`https://dummyapi.online/api/pokemon/`);
    const res = await get.json();
    setData(res);
    console.log(res);
    setloading(false);
    }
    getdata();
  },[])

  return (
    <>
    
    {
      loading ? <FidgetSpinner/> :
      data.map((item ,i)=>{
        return (
          <h1 key={i}>{item.id}</h1>
        )
      })
    }
   
    </>
  );
}

export default App;

