import React, {useState, useEffect} from 'react';
import './Survey.css';
export default function Feeling()
{
    const [transition, setTransition] = useState("Question hidden")
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
                <div className="Answer"> 
                    Testing
                </div>
                <div className="Answer"> 
                    Testing 1
                </div>
                <div className="Answer"> 
                    Testing 2
                </div>
                <div className="Answer"> 
                    Testing 3
                </div>
            </div>
        </div>
    )
}