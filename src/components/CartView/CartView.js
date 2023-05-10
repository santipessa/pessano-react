import './CartView.css'
import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () => {
 const { cart, removeItem } = useContext(CartContext)

    return (
        <div className='ItemDetailContainer'> 
            <h1>Detalle del carrito</h1>
            { 
                cart.map(prod => {
                    return (
                        <div key={prod.id} className='ItemCard'>
                            <h1>{prod.name}</h1>
                            <h2>Valor unitario: ${prod.price} x Cantidad: {prod.quantity}</h2>
                            <h3>Subtotal: ${prod.price * prod.quantity}</h3>
                            <button onClick={() => removeItem(prod.id)}>Remove</button>
                        </div>
                    )
                }) 
            }

            {<Link to='/checkout' className='ItemDetalle'>Finalizar compra</Link>}
        </div>
    )
}

export default CartView