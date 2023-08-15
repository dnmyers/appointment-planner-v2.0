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
            name: 'Test Contact',
            phone: '555-555-5555',
            email: 'test@test.com',
        },
        {
            name: 'Test Contact #2',
            phone: '555-444-5555',
            email: 'test@test.com',
        }
    ]);
    const [appointments, setAppointments] = useState([]);

    // Implement functions to add data to contacts and appointments
    const addContact = ({ name, phone, email }) => {
        const contact = {
            name,
            phone,
            email,
        };

        setContacts(prevContacts => [...prevContacts, contact]);
    };

    const addAppointment = ({ name, contact, date, time }) => {
        const appointment = {
            name,
            contact,
            date,
            time,
        };

        setAppointments(prevAppointments => [...prevAppointments, appointment]);
    };

	const router = createBrowserRouter(createRoutesFromElements(
		<Route path='/' element={<Root />} errorElement={<ErrorBoundary />}>
			<Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
			<Route path={ROUTES.CONTACTS} element={     // CONTACTS
				<ContactsPage                           // ContactsPage
					contacts={contacts}                 // contacts
					addContact={addContact}             // addContact
				/>
			} />
			<Route path={ROUTES.APPOINTMENTS} element={ // APPOINTMENTS
				<AppointmentsPage                       // AppointmentsPage
					appointments={appointments}         // appointments
					contacts={contacts}                 // contacts
					addAppointment={addAppointment}     // addAppointment
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