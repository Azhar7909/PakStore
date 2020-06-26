import React, {createContext, useState} from 'react'
import p1 from '../Assets/productsImages/design-desk-display-eyewear-313690.jpg';
import p2 from '../Assets/productsImages/iphone-se-1366998.jpg';
import p3 from '../Assets/productsImages/person-holding-iphone-1693627.jpg';
import p4 from '../Assets/productsImages/turned-on-iphone-x-with-yellow-case-1042143.jpg';
import p5 from '../Assets/productsImages/woman-using-a-smartphone-while-fronting-a-macbook-pro-and-196656.jpg';
import p6 from '../Assets/productsImages/woman-wearing-white-v-neck-shirt-using-space-gray-iphone-6-225232.jpg';



export const ProductContext = createContext();

export default function ProductContextProvider(props) {


    const [products] = useState([
        {id:1, name: 'EliateBook 8470p', price:300, image:p1, status:'hot'},
        {id:2, name: 'P2', price:10, image:p2, status:'hot'},
        {id:3, name: 'P3', price:10, image:p3, status:'new'},
        {id:4, name: 'P4', price:20, image:p4, status:'hot'},
        {id:5, name: 'P5', price:30, image:p5, status:'new'},
        {id:6, name: 'P6', price:30, image:p6, status:'hot'},
        {id:7, name: 'P5', price:70, image:p5, status:'new'},
        {id:8, name: 'P6', price:60, image:p6, status:'hot'},
    ])   

    return (
        <ProductContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductContext.Provider>
    )
}
