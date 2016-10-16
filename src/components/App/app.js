import React, { PropTypes } from 'react';
import GlobalStyles from 'styles/styles.css';
import Styles from './styles.css';
import Map from 'components/Map/map';
import Itinerary from 'components/Itinerary/itinerary';

class App extends React.Component {
    render () {
        return (
            <main className={ Styles.container }>
                <Itinerary />
                <Map />
            </main>
        );
    }
};

export default App;