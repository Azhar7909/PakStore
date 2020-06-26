import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Globel/cartContext'


export default function Navbar() {
    const {qty} = useContext(CartContext)
    return (
        <nav>
            <ul className="navbarLeft">
                <li><Link to=""> PakStore </Link></li>
            </ul>
            <ul className="navbarRight">
                <li><Link to="shopingCart">
                        <span className="shopingCart">
                        <i className="fas fa-cart-plus"></i>
                        <span className="cartCount">{qty}</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
