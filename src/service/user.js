import { authHeader } from '../helpers';

const API_URL= 'http://localhost:3000';

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${API_URL}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function getCurrentUser() {
    return JSON.parse(localStorage.user).username;
}

function logout() {
    localStorage.removeItem('user');
    // eslint-disable-next-line no-restricted-globals
    location.reload(true);
}

function getByUsername(username) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    console.log("Hello");
    return fetch(`${API_URL}/users/${username}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${API_URL}/users/register`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    console.log(response);
    return response.text().then(text => {
        console.log(text);
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

export const userService = {
    login,
    logout,
    register,
    getByUsername,
    getCurrentUser
};