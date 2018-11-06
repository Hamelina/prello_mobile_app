export const LOGIN = "@@login/LOGIN"
export const LOGOUT = "@@login/LOGOUT"
export const SIGNUP = "@@login/SIGNUP"

export const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

export const login = (username, password) => {
    return {
        type: 'LOGIN',
        username: username,
        password: password
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export const signup = (username, password) => {
    return (dispatch) => {
    };
};