import React from 'react'

export default function WordDetails({ meanings, word, font, phonetic }) {
  console.log("m" + meanings)
  console.log(word)



  return (

    <div className={font}>
      <h1 style={{ color: "#AA5CE7" }}>{word}</h1>
      <h5>{phonetic}</h5>


      <p style={{ marginTop: "15px" }}>Meaning</p>
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
  )
}
