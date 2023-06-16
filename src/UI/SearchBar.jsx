// SearchBar.js
import { CloseButton } from 'react-bootstrap';
import React from 'react';
import './SearchBar.css'

function SearchBar({ onClose }) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" /> 
      <CloseButton className='close' style={{opacity:"3",width:".15em",height:".15em"}} onClick={onClose}/>
    </div>
  );
}

export default SearchBar;
