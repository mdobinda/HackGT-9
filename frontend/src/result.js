import React, {useState} from 'react';
import {ExpandMore} from '@mui/icons-material';
import {useLocation} from 'react-router-dom';
import {
    Accordion, AccordionDetails, 
    AccordionSummary, Card, 
    CardActionArea, CardContent, 
    CardMedia, Divider, 
    Icon, Typography,
} from '@mui/material';


export default function Result ()
{

    
    const [expanded, setExpanded] = useState('');
    const location = useLocation();

    console.log(location.state)

    const handleChange = (panel) => (event, isExpanded) => {
        event.preventDefault()
        setExpanded(isExpanded ? panel : false);
      };

    return(
        <div style={{ display:"flex",width: "100%", border:"solid 5px red",textAlign:"center",  justifyContent: "space-between"}}>
            <div style={{border:"solid 5px black", marginTop:"15vh" ,width:"100vw", flexDirection:"row"}}>
                <div style={{display:'flex', width:"25vw", height:'100%', marginLeft:"10vh", flexDirection:"row", alignItems: 'space-between'}}>    

                    <div style = {{alignItems: "space-between", margin: "10%", marginLeft: "60%" }}>

                    <Accordion expanded={false} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{flexGrow:1, fontWeight:600, fontSize:24}} textAlign={"center"} color="rgb(64, 64, 173)"> Strategy </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        The 54321 grounding technique is simple, yet powerful. Like gradually attaching anchors to the boat, this method slowly pulls you back to earth. 

                        </AccordionDetails>
                    </Accordion>
                    <Accordion  style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}} id={"strategy1"}>
                            <Typography color="rgb(64, 64, 173)"> 5-4-3-2-1 Grounding Method </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                    <Accordion  style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}} id={"strategy2"}>
                            <Typography color="rgb(64, 64, 173)"> 4-7-8 Breathing Techniques  </Typography>

                            
                        </AccordionSummary>
                        <AccordionDetails>

                        Try the following:

                        Inhale to a count of four with your mouth closed.
                        Hold to a count of seven.
                        
                        Exhale through pursed lips with a whooshing sound to a count of eight.
                        Repeat the cycle up to four times, unless uncomfortable.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}} id={"strategy1"}>
                            <Typography color="rgb(64, 64, 173)">  </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>


                    </div>
                    


                    <div style={{width:"25vw", flexDirection: "row", justifyContent: 'space-between', margin: "10%", marginLeft: "60%" }}>
                    <Accordion expanded={false} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{flexGrow:1, fontWeight:600, fontSize:24}} textAlign={"center"} color="rgb(64, 64, 173)"> Spaces </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                    <Accordion  style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography color="rgb(64, 64, 173)"> Minnie name this on!!!e something </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                    <Accordion  style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography color="rgb(64, 64, 173)"> Minnie name this one something </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                    <Accordion  style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography color="rgb(64, 64, 173)"> Minnie name this one something </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                    </div>

                </div>

                
            </div>

        
        </div>
       

    )
}