import React, { PropTypes } from 'react';
import cleanHtml from 'utils/janitor';
import Styles from './styles.css';

class Header extends React.Component {
    render () {
        var self = this,
            title = self.props.title || '';

        return (
            <header className={ Styles['app-header'] }>
                <h1 dangerouslySetInnerHTML={ { __html: cleanHtml(title) } } />
            </header>
        );
    }
};

export default Header;