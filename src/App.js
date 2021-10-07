import Header from './components/header'
import Reminders from './components/Reminders';
import AddReminder from './components/AddReminder';
import { useState } from "react"



function App() {

  const [showAddReminder, setshowAddReminder] = useState(false);
  const [reminders, setReminders] = useState(JSON.parse(localStorage.getItem("reminders")) ? JSON.parse(localStorage.getItem("reminders")) : [])


  //Add Reminder

  const addReminder = (reminder) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newReminder = { id, ...reminder }
    setReminders([...reminders, newReminder])
    console.log(id);

  }
  localStorage.setItem("reminders", JSON.stringify(reminders))

  // alert display
  const notification = () => {
    var time = new Date();
    var timesec = [];
    var timerset = [];
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = hour * 3600 + min * 60;
    for (let i = 0; i < reminders.length; i++) {

      var timeinsec = reminders[i].time.split(':');
      timesec[i] = parseInt(timeinsec[0] * 3600) + parseInt(timeinsec[1] * 60)
    }
    timesec = timesec.sort();
    var sortedreminder = reminders.sort((a, b) => a.time > b.time ? 1 : a.time < b.time ? -1 : 0);

    for (let i = 0; i < sortedreminder.length; i++) {
      if (sec < timesec[i]) {
        timerset[i] = timesec[i]
      }
    }

    if (timerset.length > 0) {
      for (let i = 0; i < timerset.length; i++) {
        if (timerset[i] != null) {
          setTimeout(() => {
            alert("Time to take " + sortedreminder[i].medicine + " medicine")
          }, (timerset[i] - sec) * 1000)
        }
      }

    }
  }

  //Delete Reminder
  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  }
  localStorage.setItem("reminders", JSON.stringify(reminders))

  return (
    <div className="App">
      <Header title="Medicine Reminder" onAdd={() => setshowAddReminder(!showAddReminder)} showAdd={showAddReminder} />
      {showAddReminder && <AddReminder onAdd={addReminder} />}
      {reminders.length > 0 ? <Reminders reminders={reminders}
        onDelete={deleteReminder} ></Reminders> :
        'No reminders to show '}
      {notification()}
    </div>
  );
}

export default App;