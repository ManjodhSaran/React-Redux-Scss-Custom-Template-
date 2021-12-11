import axios from "axios";
import getBackendBaseURL from "./getBackendBaseURL";

const instance = axios.create({
    baseURL: getBackendBaseURL(),
})


export default instance;