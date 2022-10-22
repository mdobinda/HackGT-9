import {Apiconfig} from '../Apiconfig'
import GoogleMap from 'google-map-react';
import {FmdGood} from '@mui/icons-material';
import {Card, CardContent, Divider, Icon, Typography} from '@mui/material'
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
            <Card sx={{width: "50vw", height: "50vh"}}>
                <CardContent>
                    <Typography color="black">
                        My safe spot
                    </Typography>
                <Divider/>
                    <div style={{width: '47vw', height: '35vh', paddingTop: '5%'}}>
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
                </CardContent>
            </Card>
        </div>
    )
}

export default Maps