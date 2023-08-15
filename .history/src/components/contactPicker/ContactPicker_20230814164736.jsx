export const ContactPicker = (props) => {
    const [contacts, onChange, value, name] = props;

    return (
        <>
            <label htmlFor='contact-select'>
                Select a contact:
            </label>
            <select name={name} id="contact-select" value={value} onChange={onChange}>
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