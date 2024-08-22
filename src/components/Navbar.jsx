import { faBook, faMoon, faSearch, faSun, faSunPlantWilt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar({changeTheme,changeFont, isDarkmode, font}) {
    
  return (
    <nav  className={isDarkmode ? 'darkmode' : 'lightmode'}>
    <div style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon icon={faBook} style={{fontSize:"14px", marginRight:"10px"}}/> <span><b>DictionaryApp</b></span></div>
    <div style={{display:"flex", alignItems:"center"}}>
      <select value={font} onChange={changeFont} className='fontselect'>
        <option value="serif">serif</option>
        <option value="montserrat">montserrat</option>
        <option value="monospace">monospace</option>
      </select>
      {/* <label htmlFor="thememode">
      <input value="" type="checkbox" />
      <img src="mode.jpg" alt="" />
      </label> */}
<input type="checkbox" id="switch" value={isDarkmode} onChange={changeTheme} checked={isDarkmode} /><label  className="modes" for="switch"> </label>
{isDarkmode ? <FontAwesomeIcon icon={faMoon} style={{fontSize:"20px"}}/> : <FontAwesomeIcon icon={faSun} style={{fontSize:"20px", color:"#808080"}}/> }
    </div>
  </nav>
  )
}
