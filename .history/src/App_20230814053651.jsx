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
            description: {
                phone: '555-555-5555',
                email: 'sample@example.com'
            }
        },
    ]);
    console.log("🚀 ~ file: App.jsx:26 ~ App ~ contacts:", contacts)

    const [appointments, setAppointments] = useState([
        {
            name: 'Sample Appointment',
            description: [
                contact: 'Sample Contact',
                date: '08/12/2023',
                time: '11:59 PM'
            ]
        },
    ]);
    console.log("🚀 ~ file: App.jsx:34 ~ App ~ appointments:", appointments)

    // Implement functions to add data to contacts and appointments
    const addContact = ({ name, phone, email }) => {
        const contact = {
            name,
            description: [
                phone,
                email,
            ]
        };
        console.log("🚀 ~ file: App.jsx:45 ~ addContact ~ contact:", contact)

        setContacts(prevContacts => [...prevContacts, contact]);
    };

    const addAppointment = ({ name, contact, date, time }) => {
        const appointment = {
            name,
            description: [
                contact,
                date,
                time,
            ],
        };
        console.log("🚀 ~ file: App.jsx:57 ~ addAppointment ~ appointment:", appointment)

        setAppointments(appointments => [...appointments, appointment]);
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