/* eslint-disable react/prop-types */

export const ContactPicker = ({ contacts, onChange, value, name }) => {
    console.log("🚀 ~ file: ContactPicker.jsx:5 ~ ContactPicker ~ contacts:", contacts)
    console.log("🚀 ~ file: ContactPicker.jsx:5 ~ ContactPicker ~ value:", value)
    console.log("🚀 ~ file: ContactPicker.jsx:5 ~ ContactPicker ~ name:", name)
    return (
        <>
            <label htmlFor='contact-select'>
                Select a contact:
            </label>
            <select name={name} value={value} onChange={onChange} id="contact-select">
                <option value="">No Contact Selected</option>
                {
                    contacts.map(contact => (
                        <option key={contact.name} value={contact.name} style={{ color: "black"}}></option>
                    ))
                }
            </select>
        </>
    );
};