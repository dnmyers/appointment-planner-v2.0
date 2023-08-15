import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addContact }) => {
    // Define state variables for contact info and duplicate check
    const [currentName, setCurrentName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [duplicateName, setDuplicateName] = useState(false);

    // Check for contact name in the contacts array
    // variable in props
    useEffect(() => {
        if(contacts.indexOf(currentName) !== -1) {
            alert(`Contact ${currentName} already exists`);
            setDuplicateName(true);
        }
    }, [currentName, contacts]);


    const handleSubmit = (e) => {
        console.log("ContactPage - handleSubmit called.  duplicateName: ", duplicateName);
        e.preventDefault();

        // Add contact info and clear data if the contact
        // name is not a duplicate
        if(!duplicateName) {
        addContact({
                name: currentName,
                phone: phone,
                email: email,
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
            </section>
        </div>
    );
};

ContactsPage.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    addContact: PropTypes.func,
};