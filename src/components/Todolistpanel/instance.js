import * as axios from 'axios'

export const SERVER_URL = 'https://small-server.herokuapp.com'

export const instance = axios.create({  
        baseURL: SERVER_URL + '/api/',    
})
