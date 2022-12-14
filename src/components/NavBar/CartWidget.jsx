import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.scss";
import { Link } from "react-router-dom";

/*  import material */
import {useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';


const CartWidget =()=>{

    const { cartProducts, clearCart, removeAllUnitsFromCart, buyCart, totalProducts} = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);

    const [amountInCart, setAmountInCart] = useState(0);

    function handleClickRemoveAll(product){
        setAmountInCart(0);
        removeAllUnitsFromCart(product);
    }

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
return(
    <div className='cart-widget'>
    {cartProducts.length !== 0 && <p>{totalProducts}</p> }
        <ShoppingCartIcon 
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        />
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
        {cartProducts.map((product) => {
                return(
                    <div className='item-cart-product widgetCart' key={product.id}>
                        <img src={`/assets/${product.image}`} className="productImgCartWidget"  alt="" />
                        <div className='cart-product__details'>
                            <p className="widgetTitle">{product.title}</p>
                            <p>Cantidad: {product.inCart}</p>
                            <p className="widgetPrice">$ {product.price * product.inCart}</p>
                        </div>
                        <div className='cart-product__action'>
                            <DeleteIcon className="WidgetClear" onClick={()=> handleClickRemoveAll(product)}/>
                        </div>
                    </div>
                )
            })}
             <Link to="/cart">{cartProducts.length>0? <button className="comprarCarrito">Comprar carrito</button>:<></>}</Link>
            {cartProducts.length>0? <button className="eliminarCarrito" onClick={() => clearCart()}>Eliminar carrito</button>:<div className="carritoVacio"><p>??El carrito esta vacio!</p></div>}           
        </Menu>
    </div>
)
}

export default CartWidget;