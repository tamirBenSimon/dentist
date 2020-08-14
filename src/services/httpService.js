import Axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/api' :
    '//localhost:3002/api'

var axios = Axios.create({
    withCredentials: false
});

export default {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}


async function ajax(endpoint, method = 'GET', data = null) {
    try {
        console.log(`--HTTPSERVICE: ${method} --ENDPOINT: ${endpoint} --DATA: ${data} `)
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        return res.data;
    } catch (err) {
        
    }
}