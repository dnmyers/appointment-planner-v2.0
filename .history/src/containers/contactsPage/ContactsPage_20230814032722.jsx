import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addContact }) => {
    // Define state variables for contact info and duplicate check
    const [currentName, setCurrentName] = useState('');
    console.log("🚀 ~ file: ContactsPage.jsx:10 ~ ContactsPage ~ currentName:", currentName)
    const [phone, setPhone] = useState('');
    console.log("🚀 ~ file: ContactsPage.jsx:12 ~ ContactsPage ~ phone:", phone)
    const [email, setEmail] = useState('');
    console.log("🚀 ~ file: ContactsPage.jsx:14 ~ ContactsPage ~ email:", email)
    const [duplicateName, setDuplicateName] = useState(false);
    console.log("🚀 ~ file: ContactsPage.jsx:16 ~ ContactsPage ~ duplicateName:", duplicateName)

    // Check for contact name in the contacts array
    // variable in props
    useEffect(() => {
        if(contacts.indexOf(currentName) !== -1) {
            alert(`Contact ${currentName} already exists`);
            setDuplicateName(true);
        }
    }, [currentName, contacts]);


    // TODO: Fix handleSubmit.  It's not adding the contact
    const handleSubmit = (e) => {
        console.log("🚀 ~ file: ContactsPage.jsx:26 ~ handleSubmit ~ handleSubmit:", handleSubmit)
        e.preventDefault();

        // Add contact info and clear data if the contact
        // name is not a duplicate
        if(!duplicateName) {
            console.log("🚀 ~ file: ContactsPage.jsx:32 ~ handleSubmit ~ duplicateName:", duplicateName)

            addContact({
                name: currentName,
                phone: phone,
                email: email
            });

            /* Empty form fields */
            setCurrentName('');
            setPhone('');
            setEmail('');
        } else {
            alert("Duplicate contact.  Please enter a different name.");

            /* Empty form fields */
            setCurrentName('');
            setPhone('');
            setEmail('');
        }
    };

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={currentName}
                    setName={setCurrentName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList contacts={contacts} />
                console.log("🚀 ~ file: ContactsPage.jsx:76 ~ ContactsPage ~ contacts:", contacts)
            </section>
        </div>
    );
};

ContactsPage.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    addContact: PropTypes.func,
};