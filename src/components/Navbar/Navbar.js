import './Navbar.css'
import logo from './assets/logo.png'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate()

    return (
        <nav className="Navbar">
            <div>
                <img src={logo} alt='logo'/>
            </div>  
            <div>
                <Button label="Burgers" callback={() => navigate('/category/burger')}/>
                <Button label="Salsas" callback={() => navigate('/category/salsas')}/>
                <Button label="Bebidas" callback={() => navigate('/category/bebidas')}/>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar