import { useState, useEffect } from 'react';
import Banner from '../components/Banner.jsx';
import Categories from '../components/Categories.jsx';
import { getProducts } from '../services/products.js';
//import axios from 'axios'

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
       getProducts().then(products => setProducts(products));
    },[])

    return (
       <div id="home">    
            { JSON.stringify(products) }                   
            <Banner></Banner>
            <Categories></Categories>
       </div>
    )
};

export default Home;


