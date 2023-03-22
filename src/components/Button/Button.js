const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback} style={{ backgroundColor: '#ffc107', color: 'black'}}>{props.label}</button>
}

export default Button 