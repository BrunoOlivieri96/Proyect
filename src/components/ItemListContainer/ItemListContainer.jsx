import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom'
import { collection,getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = ({article}) => {

    const [listProduct, setlistProduct] = useState([])
    const {categoryid} = useParams()
    const filterByCategory = products.filter((products) => products.category === categoryid)

    
    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs (productCollection)
        const producList = productSnapshot.docs.map ( (doc) =>{
                let product = doc.data()
                product.id  = doc.id
                return product


        })
        return producList
    }
  
    useEffect(() => {
        getProducts ()
        .then((res) => {
            setlistProduct(res)
        })
     
    }, )

    return(
        <div className='list-products'>
        <h2>{article}</h2>
            <ItemList dataProducts={listProduct}/>
        </div>
    )
}

export default ItemListContainer