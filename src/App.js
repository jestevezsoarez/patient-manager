import { useState } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {

  const [appointments, setAppointments] = useState([]);

  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: ''
  });

  const updateAppointment = (e) => {
    setAppointment({
        ...appointment,
        [e.target.name]: e.target.value
      })
  }

  const addAppointment = appointment => {
    

  }

  return (
    <>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Create Appointment</h2>
            <Form
              appointment={appointment}
              updateAppointment={updateAppointment}
              addAppointment={addAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>Scheduler</h2>
            { appointments.map(appointment => 
              (
                <Appointment
                  appointment={appointment}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
