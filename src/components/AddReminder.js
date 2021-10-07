import { useState } from "react"

const AddReminder = ({onAdd}) => {

    const [medicine, setMedicine]= useState('')
    const [time, setTime]= useState('00:00')

    const onSubmit= (e) => {
        e.preventDefault()
        if(!medicine) {
            alert('Please add medicine name');
            return
        }

        onAdd({medicine,time})
        
        setMedicine('')
        setTime('00:00')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Enter Medicine Name</label>
                <input type= 'text' placeholder='Add Reminder' value={medicine} onChange={(e)=> setMedicine(e.target.value)}/>
            </div>
            <div className='form-control-check'>
                <label>Enter time of medicine</label>
                <input type= "time" value={time} onChange={(e)=> setTime(e.target.value)}/>
            </div>
            <input type='submit' value='Save Reminder' className='btn btn-block'/>
        </form>
    )
}

export default AddReminder
