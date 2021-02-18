import axios from 'axios'
import $router from "@/router"

const httpClient = axios.create({
    baseURL: "https://api-pp.vanser.org/",
    timeout: 500000,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const errorInterceptor = error => {
    // handle error
    if (!error.response) {
        // $toast.type = 'error'    
        // $toast.message= 'Network/Server error'
        return Promise.reject(error);
        }
    
        // all the other error responses
        switch(error.response.status) {

            case 400:
            //   console.log("error",error.response.data.message)
                break;
    
            case 401: // authentication error, logout the user
            $router.push({path: '/login'})
            break;
    
            default:
            //console.error(error.response.status, error.message);
        }
        return Promise.reject(error);
};

const responseInterceptor = response => {
    switch(response.status) {
        case 200: 
            
            break;
        // any other cases
        default:
            // default case
    }

    return response;
}
httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;