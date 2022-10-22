import {Apiconfig} from '../Apiconfig'
import GoogleMap from 'google-map-react';
import {FmdGood, ExpandMore} from '@mui/icons-material';
import {
    Accordion, AccordionDetails, 
    AccordionSummary, Card, 
    CardActionArea, CardContent, 
    CardMedia, Divider, 
    Icon, Typography
} from '@mui/material'
import React, {useState} from "react";


const Marker = ({  }) => {return (<div className="pin">
<Icon color="error">
    <FmdGood className="pin-icon" />
</Icon>

</div>)}


const Maps = () => {

    const [expanded, setExpanded] = useState('panel1');
    const defaultProps = {
        center: {
                lat: 33.7756,
                lng: -84.3963
        },
        zoom: 15
    };

    const handleChange = (panel) => (event, isExpanded) => {
        event.preventDefault()
        setExpanded(isExpanded ? panel : false);
      };

    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography color="black">My safe spot 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Card sx={{width: "30vw", height: "40vh"}}>
                        <CardActionArea>
                        <div style={{width: '30vw', height: '25vh'}}>
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
                            My safe spot
                        </Typography>
                        <Typography color="black" align="center">
                            This is a cool, laid back garden to vibe in
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
                    <Card sx={{width: "30vw", height: "40vh"}}>
                        <CardActionArea>
                        <div style={{width: '30vw', height: '25vh'}}>
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
                            My safe spot
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
                    <Card sx={{width: "30vw", height: "40vh"}}>
                        <CardActionArea>
                        <div style={{width: '30vw', height: '25vh'}}>
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
                            My safe spot
                        </Typography>
                        <Typography color="black" align="center">
                            This is a cool, laid back garden to vibe in
                        </Typography>
                    </CardContent>
                </Card>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Maps