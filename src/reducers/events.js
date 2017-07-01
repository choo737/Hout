export const events = (state = [], action) => {
    switch (action.type){
        case 'ADD_EVENT':
            return [...state, {
                id: action.id,
                name: action.name
            }];
        case 'REMOVE_EVENT':
            return state.filter(event => event.id !== action.id);
        default:
            return state;
    }
}