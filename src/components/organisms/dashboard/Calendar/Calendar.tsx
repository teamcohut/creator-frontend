import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Table } from 'react-bootstrap';
import './calendar.css';

interface Event {
    day: number;
    time: string;
    title: string;
}

const timezones = ['GMT', 'PST', 'EST', 'CET'];

const Calendar: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const hours = Array.from({ length: 12 }, (_, i) => `${i + 7} AM`);

    const handleAddEvent = (day: number, time: string) => {
        const title = prompt('Enter Event Title:');
        if (title) {
            setEvents([...events, { day, time, title }]);
        }
    };

    const getEvent = (day: number, time: string) => {
        return events.find(event => event.day === day && event.time === time);
    };

    return (
        <Container fluid className="p-3">

            {/* Calendar Table */}
            <Table bordered>
                <thead>
                    <tr>
                        <th className="time-column">
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    GMT
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {timezones.map((timezone) => (
                                        <Dropdown.Item key={timezone}>{timezone}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    {hours.map((hour, index) => (
                        <tr key={index}>
                            <td className="time-column">{hour}</td>
                            {Array.from({ length: 7 }).map((_, dayIndex) => {
                                const event = getEvent(dayIndex, hour);
                                return (
                                    <td
                                        key={dayIndex}
                                        className="event-slot"
                                        onClick={() => handleAddEvent(dayIndex, hour)}
                                    >
                                        {event && <span>{event.title}</span>}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Calendar;
