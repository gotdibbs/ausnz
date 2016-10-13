import React, { PropTypes } from 'react';
import GlobalStyles from 'styles/styles.css';
import Styles from './styles.css';
import Header from 'containers/Header/header';
import Timeline from 'containers/Timeline/timeline';

class App extends React.Component {
    render () {
        return (
            <main className={ Styles.app }>
                <Header />
                <Timeline />
            </main>
        );
    }
};

export default App;