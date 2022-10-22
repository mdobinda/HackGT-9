import React, {useState, useEffect} from 'react';
import './Survey.css';
const layers = require("./questions.json");
export default function Feeling()
{
    const [transition, setTransition] = useState("Question hidden")
    const [hideAns, setHideAns] = useState(true);
    useEffect(() => {
        setTransition("Question");
      });
    
    return(
        <div style={{height:"100vh"}}>
            <div className={transition} style={{marginBottom:"8vh"}}>
                <h1> What are you feeling right now?</h1>
                <h4> If you don't know, just try your best</h4>
            </div>
            <div style={{display:"flex", flexDirection:"column" ,alignContent:"center", justifyContent:"center", alignItems:"center"}}>
                {layers["root"].map((question) => {
                    return(
                        <div id={question} className={hideAns ? "Answer hidden" : "Answer"} onLoad={setTimeout(() => {setHideAns(false)}, 700)}>
                            <h3>{question}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}