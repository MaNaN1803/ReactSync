import React from 'react';

const Header = (props) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
        
      <img
        className=" w-100 "
        src={props.poster}
        alt="Movie Poster"
      />

      <p>{props.title}</p>
      <p>{props.year}</p>
      

    </div>
  );
};

export default Header;
