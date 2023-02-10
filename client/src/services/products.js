import axios from 'axios';

const PRODUCTS_ENDPOINT = 'http://localhost:8080/api/products';

export const getProducts = async () => {
    const res = await axios.get(PRODUCTS_ENDPOINT);    
    const { data } = res; 
    console.log(data)
    return data;
}