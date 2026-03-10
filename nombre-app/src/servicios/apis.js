  import axios from "axios";

    const apis = axios.create({
        baseURL: import.meta.env.VITE_APIS_URL,
        headers:{
            "Content-Type": "application/json"
        }
    })
    export default apis;