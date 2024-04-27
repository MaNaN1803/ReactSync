import React from 'react'
import { Appstate } from '../App';
import { useContext } from 'react';

const ComC = () => {
    const Appdata = useContext(Appstate);
  return (
    <div>
      ComC
      <h1>{Appdata}</h1>
    
    </div>
  )
}

export default ComC
