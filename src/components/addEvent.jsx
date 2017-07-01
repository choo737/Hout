import React from 'react';
import { addEvent } from '../actions';
import { connect } from 'react-redux';

let addEventItem = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                dispatch(addEvent(input.value));
                input.value = '';
            }}>
                Add Events
      </button>
        </div>
    );
}
export default connect()(addEventItem);