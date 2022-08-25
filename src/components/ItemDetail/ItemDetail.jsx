import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'
import { AiOutlineTag } from "react-icons/ai" 
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({products}) => {

    const [quantitySelected, setQuantitySelected] = useState(0)

    const {title , description, inCart,  price , image , stock}  = products
    
    return(
        <div className="container">
            <div className='detail'>
                <img className='detail-image' src={`/assets/${image}`} alt="Imagen producto" />
                    <div className='content'>
                    <h2>{title}</h2>
                    <h3>Envio HOY!</h3>
                    <h5>Ofertas</h5>
                    <li> {description}</li>
                    <h4><AiOutlineTag /> Stock disponible: {stock}</h4>
                    <h1>$ {price}</h1>
                    {
                        quantitySelected > 0 ?  <Link to='/cart'>Terminar Compra</Link> : <ItemCount initial={1} stock={stock} setQuantitySelected={setQuantitySelected} productData={products}/>
                    }
                    
                </div>
            </div>
        </div>
)}

export default ItemDetail;