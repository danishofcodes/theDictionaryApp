import React from 'react'

export default function WordDetails({ meanings, word, font, phonetic,  wordFound}) {
  console.log("m" + meanings)
  console.log("oo",word)

 console.log("word found, "+wordFound)

  return (<>
   {/* {loadingComplete ?  ( */}
    <div> {wordFound ?
      <div className={font}>
      <h1 style={{ color: "#AA5CE7" }}>{word}</h1>
      <h5>{phonetic}</h5>


      <ol style={{ paddingLeft: "20px" }}>
        {meanings && meanings.map((meaning, meaningIndex) => (

          <li key={meaningIndex} style={{ margin: "5px", paddingBottom: "5px" }}>
            <h4>{meaning.partOfSpeech}</h4>
            <ul style={{
              paddingLeft: "20px",
              lineHeight: "26px",
              fontWeight: "500",
              color: "#444"
            }}>
              {meaning.definitions && meaning.definitions.map((definition, defIndex) => (
                <li key={`${meaningIndex}-${defIndex}`} >

                  <p>{definition.definition}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
      :<div className='oopsErr'>Opps coudnt find that word!</div> }
   </div>
    {/* :<div className='loaderSec'><div class="lds-ripple"><div></div></div></div> } */}
   </>
  )
}
