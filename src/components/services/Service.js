import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:5000"

export const registerAPICall = (value) => axios.get(AUTH_REST_API_BASE_URL + '/send-mails',value);