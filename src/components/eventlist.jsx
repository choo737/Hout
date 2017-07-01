import React from 'react';
import { removeEvent } from '../actions';
import { connect } from 'react-redux';
import '../css/eventlist.css';
import { Button } from 'semantic-ui-react';

const EventItem = ({ id, name, onClick }) => {
    return (
        <tr height="auto">
            <td>
                <div className="event-item">
                    <h2>Event Name: {name}</h2>
                    <p>Event ID: {id}</p>
                    <div className="event-buttons">
                    <Button onClick={onClick}>Delete</Button>
                    </div>
                </div>
            </td>
        </tr>
    );
}

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
        <table className="event-list">
            {events.map(event =>
                <EventItem
                key={event.id}
                {...event}
                onClick={() => onEventClick(event.id)}
                />
            )}
        </table>
    );
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(eventList);

