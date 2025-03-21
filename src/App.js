import { useEffect, useState } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

import PropTypes from 'prop-types';

function App() {  
  
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointments) {
    initialAppointments = [];
  }

  const [appointments, setAppointments] = useState(initialAppointments);

  const title = appointments.length === 0 ? 'There is no Appointments' : 'Scheduler';

  useEffect(() => {
    if(initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  },[appointments, initialAppointments])

  const addAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ]);
  }

  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointments(newAppointments);
  }

  return (
    <>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Create Appointment</h2>
            <Form
              addAppointment={addAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{ title }</h2>
            { appointments.map(appointment => 
              (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment={deleteAppointment}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Form.propTypes = {
  addAppointment: PropTypes.func.isRequired
};

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}

export default App;
