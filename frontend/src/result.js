import React, {useState} from 'react';
import {ExpandMore} from '@mui/icons-material';
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

    const handleChange = (panel) => (event, isExpanded) => {
        event.preventDefault()
        setExpanded(isExpanded ? panel : false);
      };

    return(
        <div style={{ display:"flex",width: "100%", border:"none",textAlign:"center",  justifyContent: "space-between"}}>
            <div style={{border:"solid 5px black", marginTop:"15vh" ,width:"100vw", flexDirection:"row"}}>
                <div style={{display:'flex', width:"25vw", height:'100%', marginLeft:"10vh", flexDirection:"row", alignItems: 'space-between'}}>    

              
                    <div style = {{alignItems: "space-between", margin: "10%", marginLeft: "60%" }}>


                    <Accordion expanded={false} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{flexGrow:1, fontWeight:600, fontSize:24}} textAlign={"center"} color="#3f4f5f"> Strategy </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion expandIcon={<ExpandMore />} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}} id={"strategy1"}>
                            <Typography color="black" fontWeight = "500"> 5-4-3-2-1 Grounding Method </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        Take a deep breath to begin:
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <br/>
                        5 - Look around for 5 things that you can see, and say them out loud. 
                        
                        &nbsp;
                        &nbsp;
                        <br/>
                        4 - Think of 4 things that you can feel, and say them out loud. 

                        &nbsp;
                        &nbsp;
                        <br/>

                        3 - Listen for three sounds you can hear. 

                        &nbsp;
                        &nbsp;
                        <br/>

                        2 - Find two things you can smell

                        &nbsp;
                        &nbsp;
                        <br/>

                        1 - Find one thing you can taste. 

                        </AccordionDetails>
                    </Accordion>
                    <Accordion expandIcon={<ExpandMore />} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}} id={"strategy2"}>
                            <Typography color="black" fontWeight = "500"> 4-7-8 Breathing Techniques  </Typography>

                            
                        </AccordionSummary>
                        <AccordionDetails>

                        Try the following:

                        <br/>

                        Inhale to a count of four with your mouth closed.
                        Hold to a count of seven.

                        <br/>
                        
                        Exhale through pursed lips with a whooshing sound to a count of eight.
                        Repeat the cycle up to four times, unless uncomfortable.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expandIcon={<ExpandMore />} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}} id={"strategy1"}>
                            <Typography color="black" fontWeight = "500">  Do something tactile </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>


                    </div>
                    


                    <div style={{width:"25vw", flexDirection: "row", justifyContent: 'space-between', margin: "10%", marginLeft: "60%" }}>
                    <Accordion expanded={false} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{flexGrow:1, fontWeight:600, fontSize:24}} textAlign={"center"} color="black"> Spaces </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                    <Accordion expandIcon={<ExpandMore />} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography color="black" fontWeight="500"> Minnie name this on!!!e something </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                    <Accordion expandIcon={<ExpandMore />} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography color="black" fontWeight="500"> Minnie name this one something </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                    <Accordion expandIcon={<ExpandMore />} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography color="black" fontWeight="500"> Minnie name this one something </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                    </div>

                </div>

                
            </div>

        
        </div>
       

    )
}