import React from 'react';
import { removeEvent } from '../actions';
import { connect } from 'react-redux';
import { EventItem } from './eventItem.jsx'

const mapStateToProps = (
    state
) => {
    return {
        events: state.events
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEventClick: (id) => {
            dispatch(removeEvent(id))
        }
    }
}

const eventList = ({ events, onEventClick}) => {
    return (
        <ul>
            {events.map(event =>
                <EventItem
                key={event.id}
                {...event}
                onClick={() => onEventClick(event.id)}
                />
            )}
        </ul>
    );
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(eventList);

