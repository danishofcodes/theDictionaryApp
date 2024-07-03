import { faBook, faMoon, faSun, faSunPlantWilt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar({changeTheme,changeFont, isDarkmode, font}) {
    
  return (
    <nav  className={isDarkmode ? 'darkmode' : 'lightmode'}>
    <div style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon icon={faBook} style={{fontSize:"20px", marginRight:"10px"}}/> <span><b>theDictionaryApp</b></span></div>
    <div style={{display:"flex", alignItems:"center"}}>
      <select value={font} onChange={changeFont}>
        <option value="serif">serif</option>
        <option value="montserrat">montserrat</option>
        <option value="monospace">monospace</option>
      </select>
      {/* <label htmlFor="thememode">
      <input value="" type="checkbox" />
      <img src="mode.jpg" alt="" />
      </label> */}
<input type="checkbox" id="switch" value={isDarkmode} onChange={changeTheme} checked={isDarkmode} /><label for="switch">Toggle {isDarkmode ? <FontAwesomeIcon icon={faMoon} style={{fontSize:"20px"}}/> : <FontAwesomeIcon icon={faSunPlantWilt} style={{fontSize:"20px"}}/> }</label>
    </div>
  </nav>
  )
}
