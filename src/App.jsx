import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import WordDetails from './components/WordDetails'



function App() {
  const [isDarkmode, setIsDarkmode] = useState(false)
   const [font, setFont] = useState("montserrat")
  const toggleTheme = () => {
    setIsDarkmode(!isDarkmode); // Simplified state toggle
  };

  const changeFont =(e) =>{
        const value = e.target.value;
        console.log(value)
        setFont(value)
  }

  console.log(isDarkmode)
  return (
    <div className={`hfull ${isDarkmode ? 'darkmode' : 'lightmode'}`}>
      <Navbar changeTheme={toggleTheme} changeFont={changeFont} isDarkmode={isDarkmode} font={font}/>
      <div className='container'>
        <Searchbar />
        <WordDetails font={font} word="framework" pronounciation="fraame-work" description={"an essential supporting structure of a building, vehicle, or object."} usage={"a conservatory in a delicate framework of iron"}/>
      </div>
    </div>
  )
}

export default App
