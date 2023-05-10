import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, price, name, img, stock, description }) => {
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (count) => {
        const productToAdd = {
            id, name, price, quantity: count 
        }
        addItem(productToAdd)
        console.log(`Agregue al carrito ${count}`)
    }

    return (
        <div className='CardItem'>
            <h2 className='ItemHeader'>{name}</h2>
            <img src={img} className="ItemImg"/>
            <h3 className='Info'>Detalle del producto: {description}</h3>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail