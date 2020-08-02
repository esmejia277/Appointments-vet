import React, { useState, useEffect } from 'react';

import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = []
  }

  const [listAppointments, setListAppointments] = useState(initialAppointments);

  useEffect( () => {
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(listAppointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }

  }, [listAppointments, initialAppointments]);

  const createAppointment = appointment => {
    setListAppointments([
      ...listAppointments,
      appointment
    ]);
  }

  const deleteAppointmentById = (id) => {
    console.log(id)
    const newAppointments = listAppointments.filter( appointment => appointment.id !== id);
    setListAppointments(newAppointments);
  }


  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createAppointment={createAppointment}
            />
            
          </div>
          <div className="one-half column">

            { listAppointments.length !== 0 ? 
              <h1>Administra tus citas</h1>
              :
              <h1>Agrega una nueva cita</h1>
            }

            {
              listAppointments.map(appointment => (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointmentById={deleteAppointmentById}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
