import {Apiconfig} from '../Apiconfig'


const Maps = () => {
return <iframe title="yay" width="600" height="450" style={{border: 0}} loading="lazy" allowfullscreen
        src={`https://www.google.com/maps/embed/v1/place?key=${Apiconfig.mapsKey}&q=Eiffel+Tower,Paris+France`}></iframe>
}

export default Maps