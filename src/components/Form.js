import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';

const Form = ({createAppointment}) => {

	const [appointment, setAppointment] = useState({
		pet: '',
		owner: '',
		date: '',
		time: '',
		symptoms: ''
	});
	const [error, setError] = useState(false);
	

	const { pet, owner,	date,	time,	symptoms } = appointment;

	const handleChange = e => {
		setAppointment({
			...appointment,
			[e.target.name]: e.target.value
		})
	}
	

	const submitForm = e => {
		e.preventDefault();

		if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' ||  time.trim() === '' || symptoms.trim() === '') {
			setError(true);
			return;
		}
		setError(false);

		appointment.id = uuid();
		createAppointment(appointment);
		setAppointment({
			pet: '',
			owner: '',
			date: '',
			time: '',
			symptoms: ''
		});
	}

	


	return (
		<>
		<h1>Crear citas</h1>

		{ 
			error ? 
				<p className="alert-error">Todos los campos son obligatorios</p>
			:
			null
		}

		<form onSubmit={submitForm}>
			<label>Nombre mascota</label>
			<input
				type="text"
				name="pet"
				className="u-full-width"
				placeholder="Nombre de mascota"
				onChange={handleChange}
				value={pet}
			/>

			<label>Nombre del dueño</label>
			<input
				type="text"
				name="owner"
				className="u-full-width"
				placeholder="Nombre del dueño"
				onChange={handleChange}
				value={owner}
				/>
			<label>Fecha</label>
			<input
				type="date"
				name="date"
				className="u-full-width"
				onChange={handleChange}
				value={date}
				/>
			<label>Hora</label>
			<input
				type="time"
				name="time"
				className="u-full-width"
				onChange={handleChange}
				value={time}
				/>
			<label>Síntomas</label>
			<textarea
				className="u-full-width"
				name="symptoms"
				onChange={handleChange}
				value={symptoms}
			/>
			<button
				type="submit"
				className="u-full-width button-primary"
			>
				Agregar cita
			</button>
		</form>
		</>
	);
}
 
export default Form;