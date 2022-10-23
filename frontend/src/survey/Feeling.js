import React, {useState, useEffect} from 'react';
import './Survey.css';
import feels from '../assets/interesting.png'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const layers = require("./questions.json");
export default function Feeling()
{
    const [transition, setTransition] = useState("Question hidden")
    const [hideAns, setHideAns] = useState(true);
    const [question, setQuestion] = useState("none")
    const [goNext, setGoNext] = useState(false);
    const navigation = useNavigate()
    useEffect(() => {
        setTransition("Question");
      });

      function sayHello() {
        alert('You clicked me!');
      }

      function goDeeper(question)
      {
        console.log(question);
        navigation("/deeper", {state:{"emotion":question}})
      }
    
    return(
        <div style={{height:"100vh"}}>
            <div className={transition} style={{marginBottom:"3vh", marginTop: "3% ", marginLeft:"20vw"}}>
                <h1> What are you feeling right now?</h1>
                <h4> If you don't know, just try your best</h4>
            </div>
            <img src={feels} style={{position:"absolute", zIndex:"-5", height:"35%", width:"25%", marginLeft:"3.5vw"}} />
            <div style={{display:"flex", flexDirection:"column" ,alignContent:"center", justifyContent:"center", alignItems:"center", marginLeft:"20vw"}}>
                {layers["root"].map((question) => {
                    return(
                        <div key={question} id={question} className={hideAns ? "Answer hidden" : "Answer"} onClick={() => goDeeper(question)} onLoad={setTimeout(() => setTimeout(setHideAns(false), 700))}>
                            <h3>{question}</h3>
                        </div>
                    )
                })}
            </div>
            <div style={{display: "flex", width: "100vw", alignItems: "flex-end", justifyContent: "space-between", padding: "3%"}}> 
        


        <Link to='/'>  <ArrowBackIcon/> </Link>

      

        </div>

        </div>
    )
}