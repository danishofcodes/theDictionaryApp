import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Searchbar({onSearchWordChange, word, handleSearch}) {
  
  return (
    <div className='searchbar-container'>
    <input className='searchbar' type='text' placeholder='Search your word!' value={word} onChange={onSearchWordChange}/>
    <button className="search-button" onClick={handleSearch}><FontAwesomeIcon icon={faSearch}/></button>
    </div>
  
  )
}
