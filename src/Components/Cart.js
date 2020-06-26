import React, {useContext} from 'react'
import { CartContext } from '../Globel/cartContext'
import '../App.css'
import StripeCheckout from 'react-stripe-checkout';
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default function Cart(props) {

    const {shopingCart,totalPrice, qty, dispatch} = useContext(CartContext);
    
    const handleToken = async (token) => {
        const product = {name: 'Purchasing products', price: 'totalPrice'}
        const response = await Axios.post("http://localhost:8080/checkout", {
            product,
            token
        });
        
        const {data} = response.data;
        if (data === "success") {
            dispatch({type: 'EMPTY'});
            props.history.push('/')
            toast.success("@You have paid successfully & continue your shoping@", {position: toast.POSITION.TOP_RIGHT})
        } else {
            props.history.push('/shopingCart');
            toast.error("Failed! due to some problems", {position: toast.POSITION.TOP_RIGHT});
            
        }

    }

    

    return (
        <div className="cartContainer ">
            <div className="cartDetails ">
                <h2>Shoping Cart</h2>
                {shopingCart.length > 0? 
                shopingCart.map((cart) => (
                    <div className="cart table-responsive " key={cart.id}>
                        
                        <span className="cartImage">
                            <img src={cart.image} alt="Not Found"/>
                        </span>
                        <span className="cartProductName">
                            {cart.name}
                        </span>
                        <span className="cartProductPrice">
                           $ {cart.price} /Qty
                        </span>
                        <span className="dec" onClick={()=>dispatch({type:'DEC', id: cart.id, cart})}>
                            <i className="fas fa-minus"></i>
                        </span>

                        <span className="productQty">
                            {cart.qty}
                        </span>
                        <span className="inc" onClick={()=>dispatch({type:'INC', id: cart.id,cart})}>
                        <   i className="fas fa-plus"></i>
                        </span>
                        <span className="productTotalPrice">
                            $ {cart.price * cart.qty}/Total
                        </span>
                        <span className="productRemove" onClick={()=>dispatch({type: 'DELETE', id: cart.id, cart})}>
                            <i className="fas fa-trash-alt"></i>
                        </span>

                    </div>
                ))
                
                : "Sorry your cart is currrently empty"}

                <div className="calcButton">
                    {shopingCart.length > 0 ?
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalCart">Calculate</button>
                    : ''}
                </div> 
            </div>
 
            {/* <!-- Modal: modalCart --> */}
            
            <div className="modal summaryCart fade" id="modalCart"  role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    {/* <!--Body--> */}
                <div className="modal-body">
                    <table className="table table-hover">
                        
                    <thead>
                        <tr>
                            <th style={{borderTop: 'none'}} className="summaryHeading"colSpan="2"><h3>Cart Summary</h3></th>
                        </tr>
                        <tr>
                            <th className="summaryTableheading">Total Items</th>
                            <th className="summaryTableheading"> Total Price </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="summaryText">{qty}</td>
                            <td className="summaryText">$ {totalPrice}</td>
                        </tr>                      
                    </tbody>
                    </table>

                        </div>
                        {/* <!--Footer--> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Close</button>
                            <StripeCheckout
                                stripeKey="pk_test_51GxbpYJw6cM4prKkQiLctObeNguTbUsfj0Nr0rqVbC3dhFnbclTXFgJunoMP5rJ1JG8sQXs3NnXapDO9a1cAr1eI00FaUjIC3c"
                                token={handleToken}
                                billingAddress
                                shippingAddress
                                amount = {totalPrice * 100}
                                name= "Purchasing Products"
                            >

                            </StripeCheckout>
                        </div>
                    </div>
                </div>
               
            </div>

        </div>
    )
}
