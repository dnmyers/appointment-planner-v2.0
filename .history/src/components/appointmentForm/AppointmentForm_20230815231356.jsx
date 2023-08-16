/* eslint-disable react/prop-types */
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
    const [month, day, year] = new Date()
        .toLocaleDateString("en-US")
        .split("/");

    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit
}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </label>
                <label htmlFor="date">Date:
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={date}
                        min={getTodayString}
                        onChange={e => setDate(e.target.value)}
                    />
                </label>
                <label htmlFor="time">Time:
                    <input
                        type="time"
                        name="time"
                        id="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                </label>
                <ContactPicker contacts={contacts} onChange={e => setContact(e.target.value)} />
                <input
                    type="submit"
                    name="submit"
                    id="submit"
                    value="Submit"
                />
            </form>
        </>
    );
};