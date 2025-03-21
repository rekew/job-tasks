import {Routes, Route, Navigate} from "react-router-dom"
import Products from "./pages/Products"
import { useEffect, useState } from "react"

function RouterSet(){

    const [products, setProducts] = useState([])

    useEffect(() => {
       fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data.map(()))) 
        .catch((error) => console.error(error))
    }, [])

    console.log(products)

    return(
        <Routes>
            <Route path = "/product" element = {<Products/>}/>
            <Route path = "*" element = {<Navigate to = "/product" replace/>}/>
        </Routes>
    )
}

export default RouterSet