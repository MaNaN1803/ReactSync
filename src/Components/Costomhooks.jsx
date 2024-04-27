import React , {useState,useEffect} from 'react'

const Costomhooks = (url) => {
    const [data,setdata] = useState([]);

    useEffect(()=>{
      async function getdata(){
        const res = await fetch(url)
        
        const response = await res.json();
        setdata(response);
      
      } 
  
      getdata();
    },[])
  return [data];
}

export default Costomhooks
