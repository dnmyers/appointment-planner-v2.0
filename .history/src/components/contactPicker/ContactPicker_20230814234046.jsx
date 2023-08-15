/* eslint-disable react/prop-types */
export const ContactPicker = ({ contacts, onChange, value, name }) => {
    return (
        <>
            <div>ContactPicker</div>
            <label htmlFor='contact-select'>
                Select a contact:
            </label>
            <select name={name} value={value} onChange={onChange} id="contact-select">
                <option value="">No Contact Selected</option>
                {
                    contacts.map(contact => (
                        <option key={contact.name} value={contact.name}></option>
                    ))
                }
            </select>
        </>
    );
};