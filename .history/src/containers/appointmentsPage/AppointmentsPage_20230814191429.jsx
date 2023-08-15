/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {

    // state variables for appointment info
    const [currentName, setCurrentName] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add contact info

        // Add appointment
        const newAppointment = {
            name: currentName,
            description: {
                date: date,
                time: time,
            },
        };

        addAppointment(newAppointment);

        // Clear form
        setCurrentName('');
        setContact('');
        setDate('');
        setTime('');
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                    name={currentName}
                    setName={setCurrentName}
                    contact={contact}
                    setContact={setContact}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList appointments={appointments} />
            </section>
        </div>
    );
};