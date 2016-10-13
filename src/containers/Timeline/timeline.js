import { connect } from 'react-redux';
import TimelineComponent from 'components/Timeline/timeline';

const mapStateToProps = (state, ownProps) => {
    let itinerary = state.get('itinerary');
    let items = itinerary.get('items');

    return {
        items: items
    };
}

const Timeline = connect(
    mapStateToProps
)(TimelineComponent);

export default Timeline;