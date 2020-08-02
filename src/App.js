import React, { useState } from 'react';

import Form from './components/Form';

function App() {

  const [listAppointments, setListAppointments] = useState([]);

  const createAppointment = appointment => {
    setListAppointments([
      ...listAppointments,
      appointment
    ]);
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
            
            2
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
