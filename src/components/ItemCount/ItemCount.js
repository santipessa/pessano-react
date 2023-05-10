import './ItemCount.css'
import { useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    
    const increment = () => {
        if(count < stock) {
            setCount(prev => prev + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div className='Counter'>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
            <h3 className='Number'>{count}</h3>
        </div>
    )
}

export default ItemCount