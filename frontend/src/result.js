import React from 'react';
import {
    Accordion, AccordionDetails, 
    AccordionSummary, Card, 
    CardActionArea, CardContent, 
    CardMedia, Divider, 
    Icon, Typography
} from '@mui/material';

export default function Result ()
{
    return(
        <div style={{ display:"flex",height:"100vh", border:"solid 5px red",textAlign:"center", alignContent:"center"}}>
            <div style={{border:"solid 5px black", marginTop:"15vh" ,width:"100vw"}}>
                <div style={{width:"25vw", marginLeft:"10vh"}}>    
                    <Accordion expanded={false} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{flexGrow:1, fontWeight:600, fontSize:24}} textAlign={"center"} color="rgb(64, 64, 173)"> Strategy </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>

    )
}