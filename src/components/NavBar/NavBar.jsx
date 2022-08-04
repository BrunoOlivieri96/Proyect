import './NavBar.scss'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom';

const NavBar = () => {

    const pages = ['About Us', 'Fantasia', 'Romantico', 'Cocina'];

    return(
        <div className='navbar-primary'>
            <Link to="/"><img src="/assets/byclogo.png" alt="byclogo"/></Link>
            <ul>
                <Link to="/"><li><button>Inicio</button></li></Link>
                <Link to={`/category/${pages[1]}`}><li><button>Fantasia</button></li></Link>
                <Link to={`/category/${pages[2]}`}><li><button>Romantico</button></li></Link>
                <Link to={`/category/${pages[3]}`}><li><button>Cocina</button></li></Link>
                <Link to="/contacto"><li><button>Contacto</button></li></Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;