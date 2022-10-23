import React, {useState, useEffect} from 'react';
import './Survey.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Checkycheck from '../components/checkBox'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import yogaLady from '../assets/plants.png'
const layers = require("./questions.json");
export default function Feeling({props})
{
    let navigation = useNavigate();
    const [checked, setChecked] = React.useState([0]);
    function CheckboxList() {
        const layers = require(`../survey/${location.state.emotion}.json`);
      
      
        const handleToggle = (value) => () => {
          console.log("hehe" + value)
          const currentIndex = checked.indexOf(value);
          const newChecked = [...checked];
      
          if (currentIndex === -1) {
            newChecked.push(value);
          } else {
            newChecked.splice(currentIndex, 1);
          }
      
          setChecked(newChecked);
        };
      
        return (
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {layers["deeper"].map((value) => {
              const labelId = `checkbox-list-label-${value}`;
      
              return (
                <ListItem
                  key={value}
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value)} style = {{padding: "5%", width: "60vw"}}  dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${value}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        );
      }

    const [transition, setTransition] = useState("Question hidden")
    const [hideAns, setHideAns] = useState(true);
    const location = useLocation();
    console.log(location.state)

    function goToDrink()
    {
        console.log(checked);
        navigation("/drinky", {state:{"base": location.state.emotion, "selected":checked}})
    }
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
            <div style={{display:"flex", flexDirection:"column" ,alignContent:"center", justifyContent:"center", alignItems:"center", marginLeft:"0vw"}}>
            <div>
                            
                             {CheckboxList()}
                        </div>
                        
            </div>

            <div style={{display: "flex", width: "100vw", alignItems: "flex-end", justifyContent: "space-between", padding: "3%"}}> 
        
            <div onClick={() => navigation("/feeling")}>  <ArrowBackIcon style={{marginRight:"8vw", color:"white"}}/>  </div>


            <div onClick={() => goToDrink()}>  <ArrowForwardIcon style={{marginRight:"8vw", color:"white"}}/>  </div>

        </div>

        </div>
    )
}