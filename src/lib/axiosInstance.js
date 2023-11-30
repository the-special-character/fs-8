import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:3004",
    timeout: 3000,
    timeoutErrorMessage: "Something went wrong try after sometime"
})