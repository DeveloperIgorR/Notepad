import * as axios from 'axios'

export const SERVER_URL = 'https://small-server.herokuapp.com'

export const instance = axios.create({  
    withCredentials: true,
    baseURL: SERVER_URL + '/api/',    
})
