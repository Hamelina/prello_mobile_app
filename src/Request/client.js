// Modules
import axios from "axios";

// config
import { API_HOST, TIMEOUT} from '../config.json';

// https://github.com/axios/axios#creating-an-instance

// Singleton
const client = axios.create({
    baseURL: API_HOST,
    timeout: TIMEOUT,
})


// https://github.com/axios/axios#creating-an-instance
/**
* @desc Set the authorization header to Json Web Token protocol
* @type {Function} synchronous
* @param {String} token, "bearer xxxx" Json Web Token
* @return self
*/
client.setJWT = (token) => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return client;
}

/**
* @desc remove the authentification to Json Web Token protocol
* @type {Function} synchronous
* @return self
*/
client.removeJWT = () => {
    client.defaults.headers.common['Authorization'] = null;
    return client;
}

/**
* 
*/
client.getCredentials = () => {
    return client;
}

/**
* 
*/
client.setCredentials = (credentials) => {
    return client;
}

export default client;