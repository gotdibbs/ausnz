import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TimelineItem from 'components/TimelineItem/timelineItem';
import ContainerStyles from 'styles/container.css';
import PanelStyles from 'styles/panel.css';
import TimelineItemStyles from 'components/TimelineItem/styles.css';
import Styles from './styles.css';

class Timeline extends React.Component {
    render () {
        var self = this,
            items = self.props.items;

        return (
            <div className={ classNames(ContainerStyles.container, Styles.timeline) }>
                <div className={ Styles['timeline-vertical-line'] }></div>

                <div className={ Styles['timeline-list'] }>
                    <div className={ classNames(ContainerStyles['container'], TimelineItemStyles['timeline-list-item']) }>
                        <div className={ classNames(PanelStyles.panel, TimelineItemStyles['timeline-list-item-content-left']) }>
                            <header className={ classNames(PanelStyles['panel-header'], PanelStyles['panel-header-light']) }>Location</header>
                        </div>
                        <div className={ classNames(PanelStyles.panel, TimelineItemStyles['timeline-list-item-content-right']) }>
                            <header className={ classNames(PanelStyles['panel-header'], PanelStyles['panel-header-light']) }>Activities</header>
                        </div>
                    </div>

                    { items.map((item, key) => {
                        return <TimelineItem key={ key } detail={ item } />;
                    })}
                </div>
            </div>
        );
    }
};

export default Timeline;