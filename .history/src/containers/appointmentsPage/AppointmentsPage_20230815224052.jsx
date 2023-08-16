/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {

    // state variables for appointment info
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add contact info

        // Add appointment
        addAppointment({
            name,
            contact,
            date,
            time
        });

        // Clear form
        setName('');
        setContact('');
        setDate('');
        setTime('');
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                    name={name}
                    setName={setName}
                    contact={contact}
                    setContact={setContact}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    contacts={contacts}
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