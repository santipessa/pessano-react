import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const getProducts = (categoryId) => {
    const productsRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

    return getDocs(productsRef)
        .then(snapshot => {
            const productsAdapted = snapshot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields}
            })

            return productsAdapted
        })
        .catch(error => {
            return error
        })
}

export const getProductById = (productId) => {
    const productRef = doc(db, 'products', productId)

    return getDoc(productRef)
                .then(snapshot => {
                    const fields = snapshot.data()
                    const productAdapted = { id: snapshot.id, ...fields}
                    return productAdapted
                })
                .catch(error => {
                    return error
                })
                
}