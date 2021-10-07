import Button from './button'
import '../styles/navbar.css'

const header = ({ title, onAdd, showAdd}) => {


    return (
        <ul className='header'>
            <li>{title}</li>
            <Button color={showAdd? 'red': 'green'} text={showAdd? 'Close':'Add'} onClick={onAdd}/>
        </ul>
    )
}

export default header
