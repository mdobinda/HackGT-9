import React, {useState, useEffect} from 'react';
import './Survey.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import feels from '../assets/interesting.png'
import styled from 'styled-components'
const layers = require("./questions.json");



export default function Feeling()
{
    const [transition, setTransition] = useState("Question hidden")
    const [hideAns, setHideAns] = useState(true);

    function sayHello() {
        alert('You clicked me!');
      }
    


    useEffect(() => {
        setTransition("Question");
      });
    
    return(
        <div style={{height:"100vh"}}>
            <div className={transition} style={{marginBottom:"6vh", marginTop: "5% ", marginLeft:"10vw" }}>
             
                
            </div>
            <div style={{display:"flex", flexDirection:"row", color: "white"}}>
                <div style={{display:"flex", flexDirection:"column" ,alignContent:"center", justifyContent:"center", alignItems:"center", marginLeft:"5vw", width:"50vw", marginRight:"-10vw"}}>
                    <h2> When is the last time you've </h2>
                    <h2> had a bite to eat? </h2>
                    {layers["root"].map((question) => {
                        return(
                            <div id={question} className={hideAns ? "Answer hidden" : "Answer"} onLoad={setTimeout(() => {setHideAns(false)}, 700)}>
                                <h3>{question}</h3>
                            </div>
                        )
                    })}
                </div>
                <div style={{display:"flex", flexDirection:"column" ,alignContent:"center", justifyContent:"center", alignItems:"center", marginLeft:"-1vw", width:"50vw"}}>
                <h2 style = {{marginBottom: "3% "}}> When is the last time you've slept? </h2>
                    {layers["root"].map((question) => {
                        return(
        
                            <div id={question} className={hideAns ? "Answer hidden" : "Answer"} onLoad={setTimeout(() => {setHideAns(false)}, 700)}>
                                <h3>{question}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

            
        
        <div style={{display: "flex", width: "100vw", alignItems: "flex-end", justifyContent: "space-between"}}> 
        
        <button className='backButton' onClick={sayHello} >

        <ArrowBackIcon/>
         </button>

         <button className='forwardButton' onClick={sayHello} >

        
        <ArrowForwardIcon/>
        </button>

        </div>
   

            
        </div>
    )
}