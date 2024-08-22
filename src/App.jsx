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
  const [loading, setLoading] = useState(false)
  const [wordFound, setWordFound] = useState(true);

  // console.log(responseComplete)
  const toggleTheme = () => {
    setIsDarkmode(!isDarkmode); // Simplified state toggle
  };

  const onSearchWordChange = (e) => {
    let val = e.target.value
    if (val == '') {
      setWordmeaning([{}])
    }
    setQWord(val)

  }
  console.log(qword)

  const handleSearch = async () => {
    if (qword.trim() === "") return; // Prevent empty searches
    // I did this basically to keep track when Im getting data as a response to populate, or else Ill show a loader
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${qword}`;
    setLoading(true);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      } else {

        const json = await response.json();
        console.log(json);
        setWordmeaning(json);
        setWordFound(true)
      }
    } catch (error) {
      console.error(error.message);
      setWordFound(false)
    } finally {
      setLoading(false);


    }
  };


  // useEffect(()=>{
  //   async function getData() {
  //     const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${qword}`;
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error(`Response status: ${response.status}`);
  //       }

  //       const json = await response.json();
  //       console.log(json);
  //       setWordmeaning(json)
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }
  //   getData()
  // },[qword])

  const changeFont = (e) => {
    const value = e.target.value;
    console.log(value)
    setFont(value)
  }

  return (
    <div className={`hfull ${isDarkmode ? 'darkmode' : 'lightmode'}`}>
      <Navbar changeTheme={toggleTheme} changeFont={changeFont} isDarkmode={isDarkmode} font={font} />
      <div className='container'>
        <Searchbar onSearchWordChange={onSearchWordChange} word={qword} handleSearch={handleSearch} />

        <section style={{marginTop: "50px"}}>
          {!loading ? <div style={{ marginTop: "50px", overflow: "auto", height: "calc(100vh - 250px)", padding: "10px" }}>

            {wordMeaning.map((item, index) => {
              return (<WordDetails key={index} font={font}
                wordFound={wordFound}
                word={item.word}
                phonetic={item.phonetic}
                meanings={item.meanings} />)
            })}
          </div> : <div className='loaderSec'><div className="lds-ripple"><div></div></div></div>}
        </section>
      </div>



    </div>
  )
}

export default App;
