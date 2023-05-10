import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div className='CardItem'>
            <h2 className='ItemHeader'>{name}</h2>
            <img src={img} alt={name} className="ItemImg"/>
            <h2 className='Info'>${price}</h2>
            <Link to={`/item/${id}`} className='ItemDetalle'>Ver detalle</Link>
        </div>
    )
}

export default Item