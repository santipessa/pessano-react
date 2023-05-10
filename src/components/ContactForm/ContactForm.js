import './ContactForm.css'
import { useState } from "react"

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div className='ItemForm'>
            <h1>Complete sus datos</h1>
            <label>
                Nombre:
                <input value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Telefono:
                <input value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </label>
            <label>
                Email:
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <button onClick={() => onConfirm({ name, phone, email })}>Confirmar orden</button>
        </div>
    )
}

export default ContactForm