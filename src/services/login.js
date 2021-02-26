import httpClient from './httpClient';

const END_POINT = '/login';

export default {
    
    validateUser(params) {
        return httpClient.post(`${END_POINT}`,params)
    },
    
}