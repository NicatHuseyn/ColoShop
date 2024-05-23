import { BASE_URL } from "./url";
import axios from "axios";


export async function getAllData(endpoint) {
    const response = await axios.get(`${BASE_URL}/${endpoint}`)
    return response;
}


export async function getDataById(endpoint,id) {
    const response = await axios(`${BASE_URL}/${endpoint}/${id}`)
    return response;
}