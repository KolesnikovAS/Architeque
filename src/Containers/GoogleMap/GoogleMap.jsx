import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from "./GoogleMap.module.scss"
import locator from "../../Assets/images/Footer/location.png"

const Marker = ({ text }) => <div className={styles.marker}><p>{text}</p><img src={locator} alt="icon"/></div>;

const GoogleMap = () => {
    return (
        <section className={styles.google_map}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                    lat: 34.020350,
                    lng: -118.486676
                }}
                defaultZoom={17}
            >
                <Marker
                    lat={34.020183}
                    lng={-118.487023}
                    text="Architeque"
                />
            </GoogleMapReact>
        </section >
    )
}

export default GoogleMap;
