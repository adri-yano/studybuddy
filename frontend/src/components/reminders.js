import React, { useState } from 'react';

function Reminders() {
    const [reminders, setReminders] = useState([]);
    const [reminder, setReminder] = useState('');

    const addReminder = () => {
        if (reminder) {
            setReminders([...reminders, reminder]);
            setReminder('');
        }
    };

    return (
        <div>
            <h1>Reminders</h1>
            <input
                type="text"
                value={reminder}
                onChange={(e) => setReminder(e.target.value)}
                placeholder="Add a new reminder"
            />
            <button onClick={addReminder}>Add</button>
            <ul>
                {reminders.map((reminder, index) => (
                    <li key={index}>{reminder}</li>
                ))}
            </ul>
        </div>
    );
}

export default Reminders;