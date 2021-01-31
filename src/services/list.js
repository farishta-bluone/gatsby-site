import httpClient from './httpClient';

const END_POINT = '/list';

export default {
    get(payload) {
        return httpClient.get(END_POINT, {params: payload})
    },
    add(params) {
        return httpClient.post('/add',params)
    },
    // delete(id) {
    //     return httpClient.delete(`${END_POINT}/${id}`)
    // },
    // update(ids, params) {
    //     let newIds = ids.join()
    //     return httpClient.put(`${END_POINT}/${newIds}`, params)
    // },
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