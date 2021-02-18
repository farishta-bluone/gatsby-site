import httpClient from './httpClient';

const END_POINT = '/slits';

export default {
    get(payload) {
        return httpClient.get(`${END_POINT}`, {params: payload})
    },
    add(params) {
        return httpClient.post(`${END_POINT}`,params)
    },
    delete(id) {
        return httpClient.delete(`${END_POINT}/${id}`)
    },
    update(id, params) {
        // let newIds = ids.join()
        return httpClient.put(`${END_POINT}/${id}`, params)
    }
    
}