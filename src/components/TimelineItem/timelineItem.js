import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cleanHtml from 'utils/janitor';
import ContainerStyles from 'styles/container.css';
import PanelStyles from 'styles/panel.css';
import Styles from './styles.css';

class TimelineItem extends React.Component {
    render () {
        var self = this,
            detail = self.props.detail,
            date,
            dayType,
            airports,
            destinations,
            lodging,
            activities,
            leftPanel, rightPanel;

        if (detail.get('date')) {
            date = <div className={ Styles['timeline-list-item-header'] } dangerouslySetInnerHTML={ { __html: cleanHtml(detail.get('date')) } }></div>;
        }

        if (detail.get('dayType')) {
            dayType = <div className={ Styles['timeline-list-item-content-center'] } dangerouslySetInnerHTML={ { __html: cleanHtml(detail.get('dayType')) } }></div>;
        }

        if (detail.get('airports') && detail.get('airports').size) {
            airports = <div className={ Styles['timeline-list-item-content-center'] } 
                dangerouslySetInnerHTML={ { __html: cleanHtml(detail.get('airports').join(' <i class="fa fa-arrow-circle-o-right"></i> ')) } }></div>;
        }

        if (detail.get('destinations') && detail.get('destinations').size) {
            destinations = <header className={ PanelStyles['panel-header'] }
                dangerouslySetInnerHTML={ { __html: cleanHtml(detail.get('destinations').join(' <i class="fa fa-arrow-circle-o-right"></i> ')) } }></header>;
        }

        if (detail.get('lodging')) {
            lodging = <p><i className="fa fa-bed"></i> { detail.get('lodging') }</p>;
        }

        if (detail.get('activities') && detail.get('activities').size) {
            activities = detail.get('activities').map((activity, key) => {
                return <li key={ key } dangerouslySetInnerHTML={ { __html: cleanHtml(activity) } } />
            });
        }

        if (destinations || lodging) {
            leftPanel = (
                <div className={ classNames(PanelStyles.panel, Styles['timeline-list-item-content-left']) }>
                    { destinations }

                    { lodging }
                </div>
            );
        }

        if (activities) {
            rightPanel = (
                <div className={ classNames(PanelStyles.panel, Styles['timeline-list-item-content-right']) }>
                    <ul>
                        { activities }
                    </ul>
                </div>
            );
        }

        return (
            <div className={ Styles['timeline-list-item'] }>
                { date }
                { dayType }
                { airports }

                { leftPanel }
                { rightPanel }
            </div>
        );
    }
};

export default TimelineItem;