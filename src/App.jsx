import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import WordDetails from './components/WordDetails'



function App() {
  const [isDarkmode, setIsDarkmode] = useState(false)
   const [font, setFont] = useState("montserrat")
   const [qword, setQWord] = useState("");
   const [wordMeaning, setWordmeaning] = useState([{}]);

  
   const toggleTheme = () => {
    setIsDarkmode(!isDarkmode); // Simplified state toggle
  };

  const searchWord= (e)=>{
    let val = e.target.value
    setQWord(val)
    
  }
  console.log(qword)

  useEffect(()=>{
    async function getData() {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${qword}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        console.log(json);
        setWordmeaning(json)
      } catch (error) {
        console.error(error.message);
      }
    }
    getData()
  },[qword])
  
  const changeFont =(e) =>{
        const value = e.target.value;
        console.log(value)
        setFont(value)
  }

  return (
    <div className={`hfull ${isDarkmode ? 'darkmode' : 'lightmode'}`}>
      <Navbar changeTheme={toggleTheme} changeFont={changeFont} isDarkmode={isDarkmode} font={font}/>
      <div className='container'>
        <Searchbar searchWord={searchWord}  word={qword}/>
        

<div style={{ marginTop:"50px",overflow:"auto",
          height: "calc(100vh - 250px)", padding:"10px"}}>
   {qword ? wordMeaning.map((item)=>{
          return(
            <WordDetails font={font} word={item.word} phonetic={item.phonetic} meanings={item.meanings}/>
          )
        }) : <h3 style={{textAlign:"center", paddingTop:"20px", color:"#6b6b6b", fontFamily:"monospace"}}>Search a word! :)</h3>}
</div>
     
      </div>
    </div>
  )
}

export default App
