import axios from "axios";

const instance = axios.create({
    baseURL: '...' //The API URL (Cloud Function using Nodejs)
});

export default instance;