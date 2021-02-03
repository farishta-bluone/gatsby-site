import httpClient from './httpClient';

const END_POINT = '/slittedCoil';

export default {
    get() {
        return httpClient.get(`${END_POINT}/list`)
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
    // getOne(payload) {
    //     return httpClient.get(`${END_POINT}/${payload.id}`,{params:payload.data })
    // },
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