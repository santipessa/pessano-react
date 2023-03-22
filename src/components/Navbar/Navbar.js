import './Navbar.css'
import logo from './assets/logo.png'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div>
                <img src={logo} alt='logo'/>
            </div>  
            <div>
                <Button label="Burgers" callback={() => console.log('Burgers')}/>
                <Button label="Salsas" callback={() => console.log('Salsas')}/>
                <Button label="Bebidas" callback={() => console.log('Bebidas')}/>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar