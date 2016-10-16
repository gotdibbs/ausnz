import React, { PropTypes } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, Polyline, InfoWindow } from 'react-google-maps';
import MapStyles from './mapStyles.json';
import Itinerary from 'data/itinerary.json';
import Styles from './styles.css';

class App extends React.Component {
    render () {
        var markers,
            polylinePath;

        markers = [
            (
                <Marker
                    key={ 'start' }
                    position={ Itinerary.destinations[Itinerary.start] }
                    title={ Itinerary.start }
                    defaultAnimation={ 2 }>
                </Marker>
            )
        ]

        polylinePath = [Itinerary.destinations[Itinerary.start]];

        Itinerary.items
            .filter((day) => {
                return day && day.destinations && day.destinations.length;
            })
            .reduce((prev, curr) => {
                console.log(prev);
                console.log(curr);
                curr.destinations.forEach((destination) => {
                    if (!prev.length || prev[prev.length - 1] !== destination) {
                        prev.push(destination);
                    }
                });

                return prev;
            }, [])
            .forEach((destination, index) => {
                markers.push(
                    <Marker
                        key={ index }
                        position={ Itinerary.destinations[destination] }
                        title={ destination }
                        defaultAnimation={ 2 }>
                    </Marker>
                );

                polylinePath.push(Itinerary.destinations[destination]);
            });

        return (
            <div className={ Styles.container }>
                <GoogleMapLoader 
                    containerElement={
                        <div className={ Styles.map } />
                    }

                    googleMapElement= {
                        <GoogleMap 
                            ref={ (map) => console.log(map) }
                            defaultZoom={ 3 }
                            defaultCenter={ { lat: 21.306944, lng: -157.858333 } }
                            defaultOptions={ {
                                styles: MapStyles,
                            } }>
                            <Polyline
                                geodesic
                                options={ {
                                    strokeColor: '#FF0000',
                                    strokeOpacity: 1,
                                    strokeWeight: 2
                                } }
                                path={ polylinePath } />
                            { markers }
                        </GoogleMap>
                    }
                />
            </div>
        );
    }
};

export default App;