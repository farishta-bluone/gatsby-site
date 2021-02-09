import httpClient from './httpClient';

const END_POINT = '/companies';

export default {
    get() {
        return httpClient.get(`${END_POINT}`)
    },
    add(params) {
        return httpClient.post(`${END_POINT}`,params)
    },
}