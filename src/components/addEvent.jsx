import React from 'react';
import { addEvent } from '../actions';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import '../css/addEvent.css';

let addEventItem = ({ dispatch }) => {
    let input;
    return (
        <div className="add-event">
            <Input ref={node => {
                input = node;
            }} placeholder="add event.." />
            <Button onClick={() => {
                dispatch(addEvent(input.value));
                input.value = '';
            }}>
                Add Events
            </Button>
        </div>
    );
}
export default connect()(addEventItem);