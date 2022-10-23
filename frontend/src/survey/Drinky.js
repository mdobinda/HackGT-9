import React, {useState, useEffect} from 'react';
import './Survey.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useNavigate, useLocation } from 'react-router-dom'
const times = require("./drinkyQuestions.json");




export default function Drinky()
{
    const [transition, setTransition] = useState("Question hidden")
    const [hideAns, setHideAns] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const [solSet, setSolSet] = useState();
    const [sleep, setSleep] = useState("no");
    const [sun, setSun] = useState("no");

    const calmMap = require('./calm.json')
    const cheerMap = require('./cheer.json')
    const distractMap = require('./distract.json')
    let computed = false;

    function dayLight(question)
    {
        if (question != sun && sun != "no")
        {
            document.getElementById(`sun-${sun}`).classList.remove("Selected")
        }
        setSun(question);
        document.getElementById(`sun-${question}`).classList.add("Selected")
    }

    function sleepy(question)
    {
        if (question != sleep && sleep != "no")
        {
            document.getElementById(`sleep-${sleep}`).classList.remove("Selected")
        }
        setSleep(question);
        document.getElementById(`sleep-${question}`).classList.add("Selected")
    }

    function testing()
    {
        if (computed)
            return

        let calmCount = 0;
        let cheerCount = 0;
        let distractCount = 0;

        location.state.selected?.forEach((answer) => {
            if (answer in calmMap)
                calmCount+= calmMap[answer]
            if (answer in cheerMap)
                cheerCount += cheerMap[answer]
            if (answer in distractMap)
                distractCount += distractMap[answer];
        });

        if (calmCount > cheerCount && calmCount > distractCount)
        {
            setSolSet("calm")
        }

        else  if (cheerCount > distractCount && cheerCount > calmCount)
            {
                console.log("we're getting here 2");
                setSolSet("cheer")
            }

        else if (distractCount > cheerCount && distractCount > calmCount)
            {
                console.log("we're getting here 3");
                setSolSet("distract")
            }
        else
        {
            setSolSet("Generic")
        }

        console.log(location.state)

    }


    function sayHello() {
        alert('You clicked me!');
      }
    


    useEffect(() => {
        setTransition("Question");
        testing();
      });

    
    return(
        <div style={{height:"100vh"}}>
            <div className={transition} style={{marginBottom:"6vh", marginTop: "5% ", marginLeft:"10vw" }}>
             
                
            </div>
            <div style={{display:"flex", flexDirection:"row", color: "white"}}>
                <div style={{display:"flex", flexDirection:"column" ,alignContent:"center", justifyContent:"center", alignItems:"center", marginLeft:"5vw", width:"50vw", marginRight:"-10vw"}}>
                    <h2> When is the last time you've </h2>
                    <h2> gotten direct sunlight? </h2>
                    {times["times"].map((question) => {
                        console.log(question);
                        return(
                            <div id={`sun-${question}`} onClick={() => dayLight(question)} className={hideAns ? "Answer hidden" : "Answer"} onLoad={setTimeout(() => {setHideAns(false)}, 700)}>
                                <h3>{question}</h3>
                            </div>
                        )
                    })}
                </div>
                <div style={{display:"flex", flexDirection:"column" ,alignContent:"center", justifyContent:"center", alignItems:"center", marginLeft:"-1vw", width:"50vw"}}>
                <h2 style = {{marginBottom: "3% "}}> When is the last time you've slept? </h2>
                    {times["times"].map((question) => {
                        return(
        
                            <div id={`sleep-${question}`} onClick={() => sleepy(question)} className={hideAns ? "Answer hidden" : "Answer"} onLoad={setTimeout(() => {setHideAns(false)}, 700)}>
                                <h3>{question}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

            
        
        <div style={{display: "flex", width: "100vw", alignItems: "flex-end", justifyContent: "space-between", padding: "3%"}}> 
        
        <div onClick={() => navigate("/deeper", {state:{"emotion": location.state.base}})}>  <ArrowBackIcon/>  </div>

        <div onClick={() =>  navigate("/results", {state:{"base": location.state.base, "set": solSet, "sleep": sleep, "sun": sun}})}>  <ArrowForwardIcon/>  </div>

        </div>
   
        </div>
    )
}