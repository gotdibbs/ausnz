import { connect } from 'react-redux';
import HeaderComponent from 'components/Header/header';

const mapStateToProps = (state, ownProps) => {
    let itinerary = state.get('itinerary');
    let title = itinerary.get('title');

    return {
        title: title
    };
}

const Header = connect(
    mapStateToProps
)(HeaderComponent);

export default Header;