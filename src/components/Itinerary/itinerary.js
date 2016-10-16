import React, { PropTypes } from 'react';
import Styles from './styles.css';
import Header from 'containers/Header/header';
import Timeline from 'containers/Timeline/timeline';

class App extends React.Component {
    render () {
        return (
            <div className={ Styles.container }>
                <Header />
                <Timeline />
            </div>
        );
    }
};

export default App;