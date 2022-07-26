import './NavBar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        // Fragment
        <div className='navbar-primary'>
            <img src="/assets/byclogo.png" alt="BYC logo" />
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contactanos</button></li>
                <li><button>Ofertas</button></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;