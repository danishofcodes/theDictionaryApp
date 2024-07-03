import React from 'react'

export default function WordDetails({ word, description, pronounciation, usage , font}) {
    return (
        <div style={{ marginTop:"15px"}} className={font}>
            <h1>{word}</h1>
            <h5 style={{color:"#AA5CE7"}}>{pronounciation}</h5>


            <p  style={{ marginTop:"15px"}}>Meaning</p>
            <ol style={{ paddingLeft: "20px", marginTop:"15px"}}>
                <li style={{ marginBottom: "10px" , borderBottom:"1px solid #ddd", padding:"10px"}}>
                   <b> {description}</b>
                    <div style={{ display: "flex" }}>
                        {/* <h4 style={{ marginRight: "5px" }}>Usage : </h4> */}
                        <p>"{usage}"</p>
                    </div>
                </li>
                <li style={{ marginBottom: "10px" , borderBottom:"1px solid #ddd", padding:"10px"}}>
                   <b> {description}</b>
                    <div style={{ display: "flex" }}>
                        {/* <h4 style={{ marginRight: "5px" }}>Usage : </h4> */}
                        <p>"{usage}"</p>
                    </div>
                </li>
                <li style={{ marginBottom: "10px", borderBottom:"1px solid #ddd", padding:"10px"}}>
                   <b> {description}</b>
                   <div style={{ display: "flex" }}>
                        {/* <h4 style={{ marginRight: "5px" }}>Usage : </h4> */}
                        <p>"{usage}"</p>
                    </div>
                </li>
            </ol>


        </div>
    )
}
