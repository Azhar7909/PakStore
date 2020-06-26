import React, {useContext} from 'react'
import { ProductContext } from '../Globel/ProductContext';
import Banner from './Banner';
import { CartContext } from '../Globel/cartContext';



export default function ProductShow() {
    const {products} = useContext(ProductContext)
    const {dispatch} = useContext(CartContext)
    
    
    
    return (
        <div>
            <Banner />
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="">
                        {product.status === 'hot' ? <div className="hot">Hot</div> : ''}
                        {product.status === 'new' ? <div className="new">New</div> : ''}
                            <img className="productImage" src={product.image} alt="Not Found"/>
                        </div>
                        <div className="productDetail">
                            <div className="productName">
                                {product.name}
                            </div>
                            <div className="productPrice">
                            $ {product.price}
                            </div>
                        </div>
                        <button type="button" onClick={() => dispatch({type:'ADD_TO_CART',id:product.id, product})} className="btn addButton btn-success">Add To Card</button>
                        
                    </div>
                ))}
            
            </div>
        </div>
    )
}
