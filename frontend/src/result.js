import React, {useState} from 'react';
import {FmdGood, ExpandMore} from '@mui/icons-material';
import {
    Accordion, AccordionDetails, 
    AccordionSummary, Card, 
    CardActionArea, CardContent, 
    Icon, Typography,
} from '@mui/material';
import {useLocation} from 'react-router-dom';
import GoogleMap from 'google-map-react';
import {Apiconfig} from './Apiconfig'


const Marker = ({  }) => {return (<div className="pin">
<Icon color="error">
    <FmdGood className="pin-icon" />
</Icon>
</div>)}


export default function Result ()
{
    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, isExpanded) => {
        event.preventDefault()
        setExpanded(isExpanded ? panel : false);
      };

      let location = useLocation();
      console.log(location.state);

      const defaultProps = {
        center: {
                lat: 33.7756,
                lng: -84.3963
        },
        zoom: 15
    };

    return(
        <div style={{ display:"flex",width: "100%", border:"none",textAlign:"center",  justifyContent: "space-between"}}>
            <div style={{ marginTop:"15vh" ,width:"100vw", flexDirection:"row"}}>
                <div style={{display:'flex', width:"25vw", height:'100%', marginLeft:"10vh", flexDirection:"row", alignItems: 'space-between'}}>    

              
                    <div style = {{alignItems: "space-between", margin: "10%", marginLeft: "60%" }}>


                    <Accordion expanded={false} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{flexGrow:1, fontWeight:600, fontSize:24}} textAlign={"center"} color="#3f4f5f"> Strategy </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{minWidth:"300px"}}>
                        <AccordionSummary expandIcon={<ExpandMore />}  sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}} id={"strategy1"}>
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
                    <Accordion style={{minWidth:"300px"}}>
                        <AccordionSummary expandIcon={<ExpandMore />}  sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}} id={"strategy2"}>
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
                    <Accordion  style={{minWidth:"300px"}}>
                        <AccordionSummary expandIcon={<ExpandMore />} sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}} id={"strategy1"}>
                            <Typography color="black" fontWeight = "500">  Do something tactile </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </Accordion>


                    </div>
                    


                    <div style={{width:"25vw", height: '50vh', flexDirection: "row", justifyContent: 'space-between', margin: "10%", marginLeft: "60%" }}>
                    <Accordion expanded={false} style={{minWidth:"300px"}}>
                        <AccordionSummary sx={{textAlign: "center", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{flexGrow:1, fontWeight:600, fontSize:24}} textAlign={"center"} color="black"> Spaces </Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography color="black">My safe spot 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Card sx={{width: "22vw", height: "40vh"}}>
                        <CardActionArea>
                        <div style={{width: '22vw', height: '25vh'}}>
                            <GoogleMap
                            bootstrapURLKeys={{ key: Apiconfig.mapsKey }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                            >
                                <Marker
                                lat={33.777}
                                lng={-84.3963}
                                />
                            </GoogleMap>
                            </div>
                        
                    </CardActionArea>
                    <CardContent style={{padding: '5px'}}>
                        <Typography color="black" variant="h6" align="center">
                            My safe spot 1
                        </Typography>
                        <Typography color="black" align="center">
                            Make a stop by the Minnie Mouse clock
                        </Typography>
                    </CardContent>
                </Card>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography color="black">My safe spot 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Card sx={{width: "22vw", height: "40vh"}}>
                        <CardActionArea>
                        <div style={{width: '22vw', height: '25vh'}}>
                            <GoogleMap
                            bootstrapURLKeys={{ key: Apiconfig.mapsKey }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                            >
                                <Marker
                                lat={33.777}
                                lng={-84.3993}
                                />
                            </GoogleMap>
                            </div>
                        
                    </CardActionArea>
                    <CardContent style={{padding: '5px'}}>
                        <Typography color="black" variant="h6" align="center">
                            My safe spot 2
                        </Typography>
                        <Typography color="black" align="center">
                            This is a cool, laid back garden to vibe in
                        </Typography>
                    </CardContent>
                </Card>
                </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography color="black">My safe spot 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Card sx={{width: "22vw", height: "40vh"}}>
                        <CardActionArea>
                        <div style={{width: '22vw', height: '25vh'}}>
                            <GoogleMap
                            bootstrapURLKeys={{ key: Apiconfig.mapsKey }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                            >
                                <Marker
                                lat={33.775}
                                lng={-84.3963}
                                />
                            </GoogleMap>
                            </div>
                        
                    </CardActionArea>
                    <CardContent style={{padding: '5px'}}>
                        <Typography color="black" variant="h6" align="center">
                            My safe spot 3
                        </Typography>
                        <Typography color="black" align="center">
                            Check out some of the hammocks in the eco-commons
                        </Typography>
                    </CardContent>
                </Card>
                </AccordionDetails>
            </Accordion>
                    </div>

                </div>

                
            </div>

        
        </div>
       

    )
}