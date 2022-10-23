import React, {useState, useEffect} from 'react';
import './Survey.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useLocation } from 'react-router-dom'
import Checkycheck from '../components/checkBox'

import yogaLady from '../assets/plants.png'
const layers = require("./questions.json");
export default function Feeling({props})
{

    const [transition, setTransition] = useState("Question hidden")
    const [hideAns, setHideAns] = useState(true);
    const location = useLocation();
    console.log(location.state)
    useEffect(() => {
        setTransition("Question");
      });

      function sayHello() {
        alert('You clicked me!');
      }
    
    return(

        <div style={{height:"100vh"}}>
            <div className={transition} style={{marginBottom:"6vh", marginTop: "5% ", marginLeft:"0vw"}}>
                <h1> I see you picked {location.state.emotion.toLowerCase()}. </h1>
                <h4> Do any of these also apply?  </h4>
            </div>
            <img src={yogaLady} style={{position:"absolute", zIndex:"-5", size: "50%",  marginLeft:"65.5vw"}} />
            <div style={{display:"flex", flexDirection:"column" ,alignContent:"center", justifyContent:"center", alignItems:"center", marginLeft:"0vw"}}>
            <div>
                            
                             <Checkycheck/>
                        </div>
                        
            </div>

            <div style={{display: "flex", width: "100vw", alignItems: "flex-end", justifyContent: "space-between", padding: "3%"}}> 
        
            <Link to='/contact'>  <ArrowBackIcon/> </Link>


            <Link to='/Drinky'>  <ArrowForwardIcon/>  </Link>

        </div>

        </div>
    )
}