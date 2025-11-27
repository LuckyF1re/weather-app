import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use(config => {
    if (config.params) {
        config.params.appid = import.meta.env.VITE_API_KEY;
    } else {
        config.params = { appid: import.meta.env.VITE_API_KEY };
    }
    return config;
})

export default api;

