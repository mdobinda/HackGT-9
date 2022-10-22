import React, {useState, useEffect} from 'react';
import './Survey.css';
import feels from '../assets/interesting.png'
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
            <div className={transition} style={{marginBottom:"6vh", marginTop: "5% ", marginLeft:"20vw"}}>
                <h1> What are you feeling right now?</h1>
                <h4> If you don't know, just try your best</h4>
            </div>
            <img src={feels} style={{position:"absolute", zIndex:"-5", height:"45%", width:"25%", marginLeft:"3.5vw"}} />
            <div style={{display:"flex", flexDirection:"column" ,alignContent:"center", justifyContent:"center", alignItems:"center", marginLeft:"20vw"}}>
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