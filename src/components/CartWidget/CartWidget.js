import cart from './assets/carrito.png'
import './CartWidget.css'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate('/cart')} className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget