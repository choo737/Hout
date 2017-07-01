export const userActivity = (state = {}, action) => {
    switch (action.type){
        case 'SIGN_IN':
            return {
                loggedIn: login(action.username, action.password)
            };
        case 'SIGN_OUT':
            return {loggedIn: false};
        default:
            return state;
    }
}

const login = (username, password) => {
    return true;
}