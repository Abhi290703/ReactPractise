import axios from "axios";

const apiEndPoint = "https://dummyjson.com/products";

export async function apiFunction() {
    try {

        const res = await axios.get(apiEndPoint);
        console.log(res);
        
        return res.data;

    } catch (error) {
        console.error(error);
        return error;
    }
}