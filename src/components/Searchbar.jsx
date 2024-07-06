import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Searchbar({searchWord, word}) {
  
  return (
    <>
    <label htmlFor="searchbar"></label>
    <input className='searchbar' type='text' placeholder='Search your word!' value={word} onChange={searchWord}/>
    </>
  
  )
}
