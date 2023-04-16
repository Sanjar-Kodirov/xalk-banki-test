import { memo } from 'react';
import './input.css'
const Input = memo((props) => {
    const { onChange, placeholder, type } = props

    const handleInputChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className='input-container'>
            <input onChange={handleInputChange} type={type} id="input-text" name="input-text" placeholder={placeholder} />
        </div>
    )
})

export default Input