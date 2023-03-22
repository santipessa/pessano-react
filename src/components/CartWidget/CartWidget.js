import cart from './assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            0
        </div>
    )
}

export default CartWidget