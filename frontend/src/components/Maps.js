import {Apiconfig} from '../Apiconfig'
import GoogleMap from 'google-map-react';
import {FmdGood} from '@mui/icons-material';
import {Card, CardActionArea, CardContent, CardMedia, Divider, Icon, Typography} from '@mui/material'
import React from "react";


const Marker = ({  }) => {return (<div className="pin">
<Icon color="error">
    <FmdGood className="pin-icon" />
</Icon>

</div>)}


const Maps = () => {

    const defaultProps = {
        center: {
                lat: 33.7756,
                lng: -84.3963
        },
        zoom: 15
    };


    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <Card sx={{width: "50vw", height: "45vh"}}>
                <CardActionArea>
                <div style={{width: '50vw', height: '35vh'}}>
                    <GoogleMap
                    bootstrapURLKeys={{ key: Apiconfig.mapsKey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    >
                        <Marker
                        lat={33.7756}
                        lng={-84.3963}
                        />
                    </GoogleMap>
                    </div>
                
                </CardActionArea>
                <CardContent style={{padding: '5px'}}>
                    <Typography color="black" variant="h5" align="center">
                        My safe spot
                    </Typography>
                    <Typography color="black" align="center">
                        This is a cool, laid back garden to vibe in
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Maps