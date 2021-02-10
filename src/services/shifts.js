import httpClient from './httpClient';

const END_POINT = '/shifts';

export default {
    get() {
        return httpClient.get(`${END_POINT}`)
    }
}