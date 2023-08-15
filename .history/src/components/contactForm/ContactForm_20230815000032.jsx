/* eslint-disable react/prop-types */

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
}) => {
    console.log("ContactForm - name: " + name + ", phone: " +  phone + ", email: " + email);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        placeholder='Enter name...'
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="phone">Phone:
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={phone}
                        placeholder='555-555-5555'
                        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
                        onChange={e => setPhone(e.target.value)}
                    />
                </label>
                <label htmlFor="email">Email:
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder='test@example.com'
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <input type="submit" name="submit" id="submit" />
            </form>
        </>
    );
};