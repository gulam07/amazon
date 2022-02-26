import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/project-4cb77/us-central1/api' //The API URL (Cloud Function using Nodejs)
});

export default instance;