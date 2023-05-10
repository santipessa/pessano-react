import './Checkout.css'
import { useContext } from "react"
import ContactForm from "../ContactForm/ContactForm"
import { CartContext } from "../../context/CartContext"

const Checkout = () => {

    const { cart, total } = useContext(CartContext)

    const handleOnConfirm = (userData) => {
        const objOrder = {
            buyer: userData,
            items: cart,
            total
        }
    }

    return (
        <div className="ItemFormulario">
            <h1>Checkout</h1>
            <ContactForm onConfirm={handleOnConfirm}/>
        </div>
    )
}

export default Checkout