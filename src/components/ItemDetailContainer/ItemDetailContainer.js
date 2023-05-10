import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import { getProductById } from '../../services/firebase/firestore/products'
import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()


    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
    }, [productId])
    
    return (
        <div className='ItemDetailContainer'>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer