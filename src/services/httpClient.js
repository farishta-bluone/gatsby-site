import axios from 'axios'
import $router from "@/router"

const getAuthToken = () => localStorage.getItem('access_token');

const authInterceptor = (config) => {
    if (getAuthToken())
        config.headers.common['Authorization'] = 'Bearer ' + getAuthToken();
    return config;  
}

const httpClient = axios.create({
    baseURL: "https://api-uat.vanser.org/",
    timeout: 500000,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

httpClient.interceptors.request.use(authInterceptor);

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
            localStorage.removeItem('access_token');
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