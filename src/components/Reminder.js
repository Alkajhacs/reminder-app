import {FaTimes} from 'react-icons/fa'

export const Reminder = ({reminder, onDelete}) => {
    return (
        <div>
            <table >
                <tbody>
                <tr>
                    <td>{reminder.medicine}</td>
                    <td>{reminder.time}</td>
                    <td> <FaTimes 
            style={{color: 'red', cursor:'pointer'}}
            onClick={() => onDelete(reminder.id)}>
            </FaTimes></td>
                </tr>
</tbody>
                </table>
        
    </div>
    )
}

export default Reminder