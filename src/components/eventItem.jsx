import React from 'react';

export const EventItem = ({ id, name, onClick }) => {
    return (
        <li>
            <h2>Event Name: {name}</h2>
            <p>Event ID: {id}</p>
            <button onClick={onClick}>Delete</button>
        </li>
    );
}