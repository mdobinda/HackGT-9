import {Apiconfig} from '../Apiconfig'
import GoogleMap from 'google-map-react';
import {FmdGood} from '@mui/icons-material';
import React from "react";

const Marker = ({ text }) => {return (<div className="pin">
<FmdGood className="pin-icon" />
</div>)}


const Maps = () => {

    const defaultProps = {
        center: {
                lat: 33.7756,
                lng: -84.3963
        },
        zoom: 11
    };


    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
            bootstrapURLKeys={{ key: Apiconfig.mapsKey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
                <Marker
                lat={33.7756}
                lng={-84.3963}
                text={"My Text"}
                />
            </GoogleMap>
        </div>
    )
}

export default Maps