import { useState } from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate,
    useRouteError
} from "react-router-dom";

import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/AppointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

import "./App.css";

function App() {
    // Define state variables for contacts and appointments
    const [contacts, setContacts] = useState([
        {
            name: 'Sample Contact',
            phone: '555-555-5555',
            email: 'sample@example.com'
        },
    ]);

    const [appointments, setAppointments] = useState([
        {
            name: 'Sample Appointment',
            contact: 'Sample Contact',
            date: '08/12/2023',
            time: '11:59 PM'
        },
    ]);

    // Implement functions to add data to contacts and appointments
    const addContact = ({ name, phone, email }) => {
        const contact = {
            name,
            phone,
            email,
        };
        console.log("🚀 ~ file: App.jsx:45 ~ addContact ~ contact:", contact)

        setContacts(prevContacts => [...prevContacts, contact]);
        for(let contact of contacts) {
            console.log("addContact - contacts " + contact.name + " " + contact.phone + " " + contact.email);
        }
    };

    const addAppointment = ({ name, contact, date, time }) => {
        const appointment = {
            name,
            contact,
            date,
            time,
        };
        console.log("🚀 ~ file: App.jsx:57 ~ addAppointment ~ appointment:", appointment)

        setAppointments(appointments => [...appointments, appointment]);

        for(let appointment in appointments) {
            console.log("addAppointment - appointment: " + appointment.name + " " + appointment.date + " " + appointment.time);
        }
    };

	const router = createBrowserRouter(createRoutesFromElements(
		<Route path='/' element={<Root />} errorElement={<ErrorBoundary />}>
			<Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
			<Route path={ROUTES.CONTACTS} element={     // CONTACTS
				<ContactsPage                           // ContactsPage
					contacts={contacts}                 // Contacts
					addContact={addContact}             // Add contact
				/>
			} />
			<Route path={ROUTES.APPOINTMENTS} element={ // APPOINTMENTS
				<AppointmentsPage                       // AppointmentsPage
					appointments={appointments}         // Appointments
					contacts={contacts}                 // Contacts
					addAppointment={addAppointment}     // Add appointment
				/>
			} />
		</Route>
	));

    function ErrorBoundary() {
        let error = useRouteError();

        console.error(error);
        return (
            <>
                <div>Dang!</div>
                <div>An unexpected error happened.  Please try again.</div>
            </>
        )
    }

	return (
		<RouterProvider router={router} />
	);
}

export default App;