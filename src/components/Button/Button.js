import './Button.css'

const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback} className='Button'>{props.label}</button>
}

export default Button 



