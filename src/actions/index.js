let nextEventId = 0;

export const addEvent = (name) => {
  return {
    type: 'ADD_EVENT',
    id: nextEventId++,
    name
  };
};

export const removeEvent = (id) => {
  return {
    type: 'REMOVE_EVENT',
    id
  };
};