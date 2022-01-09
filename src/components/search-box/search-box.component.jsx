import React from 'react'
import './search-box.style.css';

export default function searchBox({ placeholder, handleChange }) {
    return (
        <input 
            type="search"
            className="search" 
            onChange= {handleChange}
            placeholder= {placeholder}
        />
    )
}
