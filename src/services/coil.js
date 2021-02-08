import httpClient from './httpClient';

const END_POINT = '/coil';

export default {
    get(payload) {
        return httpClient.get(`${END_POINT}/list`, {params: payload})
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
    },
    getSlits(id) {
        return httpClient.get(`${END_POINT}/${id}/slits`)
    },
    addSlits(id, params) {
        return httpClient.post(`${END_POINT}/${id}/slits`,params)
    },
    // prevNext(ids,data) {
    //     let newIds = ids.join()
    //     return httpClient.get(`${END_POINT}/${newIds}/prev-next`,{params:data })
    // },
    // getStatus() {
    //     return httpClient.get(`${END_POINT}/status-list`)
    // },
    // updateImages(ids) {
    //     let newIds = ids.join()
    //     return httpClient.put(`${END_POINT}/image-from-gallery/${newIds}`)
    // },
    
}