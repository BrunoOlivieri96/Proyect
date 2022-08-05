import './Item.scss'
import { AiFillHeart, AiOutlineCreditCard, AiTwotoneCar, AiOutlineTag } from "react-icons/ai" 
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
const Item = ({data}) => {
 
    const {id, title, image, price, stock} = data

    return(
        <div className="item-product">
            <Link to={`/productos/${id}`}>
            <div className='float-options'>
                <p>ENVIO HOY!</p>
                <button><AiFillHeart /></button>
            </div>
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <div className='detail-product'>
                <p>{title}</p>
                <p><AiOutlineCreditCard /> 6 Cuotas sin interés</p>
                <p><AiTwotoneCar />Los envios son sin costo</p>
                <p><AiOutlineTag />Disponible: {stock}</p>
                <h1>$ {price}</h1>
            </div>
            </Link>
        </div> 
    )
}

export default Item;