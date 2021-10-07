import { Reminder } from "./Reminder"

const Reminders = ({reminders, onDelete}) => {
    return (
        <div>
            <div className="medreminderlist">List of Reminders</div>
            <table className="rem-tbl">
                <thead>
                    <tr>
                        <td>
                            Medicine Name
                        </td>
                        <td className="tabl-head-td1">
                            Time to take medicine
                        </td>
                        <td className="tabl-head-td2">
                            OPeration
                        </td>
                    </tr>
                </thead>
            </table>
            {reminders.map((reminder)=> (
                <Reminder key={reminder.id} reminder={reminder}
                onDelete={onDelete}
                /> 
             ))}
        </div>
    )
}

export default Reminders
