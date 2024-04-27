
import './App.css';
import React , {useState,useEffect} from 'react';

function App() {

  const [state,setstate]= useState(1);
  const [data,setData] = useState([]);

  useEffect(()=>{
    window.alert("hello");
    async function getdata(){
    const get = await fetch(`https://dummyapi.online/api/pokemon/${state}`);
    const res = await get.json();
    setData([res]);
    }
    getdata();
  },[state])


  
  return (
    

    <div className="App">
      <button onClick={()=> setstate(state+1)}>see next{state}</button>
      {
        data.map((item)=>(
          <div key={item.id}>
          <h2>Pokemon: {item.pokemon}</h2>
          <p>Type: {item.type}</p>
          <p>Abilities: {item.abilities.join(', ')}</p>
          <p>Hitpoints: {item.hitpoints}</p>
          <p>Evolutions: {item.evolutions.join(', ')}</p>
          <p>Location: {item.location}</p>
          <img src={item.image_url} alt={item.pokemon} />
          </div>
        ))

      }
    </div>
  );
}


export default App;
