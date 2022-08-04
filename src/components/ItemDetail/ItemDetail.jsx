import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'
import { AiOutlineTag } from "react-icons/ai" 

const ItemDetail = ({products}) => {

    const {title , description,  price , image , stock}  = products
    
    return(
        <div className="container">
            <div className='detail'>
                <img className='detail-image' src={`/assets/${image}`} alt="Imagen producto" />
                    <div className='content'>
                    <h2>{title}</h2>
                    <h3>Llega hoy!</h3>
                    <li> {description}</li>
                    <h4><AiOutlineTag /> Disponible {stock}</h4>
                    <h1>$ {price}</h1>
                    <ItemCount initial={1} stock={stock}/>
                </div>
            </div>
        </div>
)}

export default ItemDetail;