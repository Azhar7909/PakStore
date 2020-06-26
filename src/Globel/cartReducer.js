
export const CartReducer = (state, action) => {

    const {shopingCart, totalPrice, qty} = state;

    let product;
    let index;
    let updatedPrice;
    let updatedQty;


    switch(action.type){
        case 'ADD_TO_CART':
            const check = shopingCart.find(product => product.id === action.id)
        if (check) {
            alert("Item added to cart")
            return state;
        } else {
            product = action.product;
            product['qty'] = 1;
            updatedQty = qty + 1;
            updatedPrice = totalPrice + product.price;
            return{
                shopingCart: [product, ...shopingCart],
                totalPrice : updatedPrice,
                qty : updatedQty
            }
            
        }

        case 'INC':
            product = action.cart;
            product.qty = product.qty + 1;
            updatedPrice = totalPrice + product.price;
            updatedQty = qty + 1;
            index = shopingCart.findIndex(cart=>cart.id === action.id);
            shopingCart[index] = product;
            return {shopingCart:[...shopingCart], totalPrice: updatedPrice, qty: updatedQty}

        case 'DEC':
            product =action.cart;
            if (product.qty > 1) {
                product.qty = product.qty - 1;
                updatedPrice = totalPrice - product.price;
                updatedQty = qty - 1;
                index = shopingCart.findIndex(cart=>cart.id === action.id);
                shopingCart[index] = product;
                return {shopingCart: [...shopingCart], totalPrice: updatedPrice, qty: updatedQty}
                    
            } else {
                return state;
            }

        
        case 'DELETE':
            const filtered = shopingCart.filter(product => product.id !== action.id);
            product = action.cart;
            updatedQty = qty - product.qty;
            updatedPrice = totalPrice - product.price * product.qty;
            return {shopingCart: [...filtered], totalPrice: updatedPrice, qty: updatedQty}
        
        case 'EMPTY':
            return{
                shopingCart:[],
                totalPrice:0,
                qty:0
            }
            
        default:
            return state;
    }
    

}