// import React, { useState } from "react";
// import { FiPlus, FiArrowLeft, FiArrowRight } from "react-icons/fi";
// import Header from '../Header';
// import Button from "../../../../components/atoms/Button";
// import './calendar.css';

// const CalendarPage: React.FC = () => {
//     const [currentDate, setCurrentDate] = useState(new Date());

//     const changeWeek = (direction: "prev" | "next") => {
//         const newDate = new Date(currentDate);
//         newDate.setDate(currentDate.getDate() + (direction === "next" ? 7 : -7));
//         setCurrentDate(newDate);
//     };

//     const getWeekRange = (date: Date) => {
//         const startOfWeek = new Date(date);
//         startOfWeek.setDate(date.getDate() - date.getDay());
//         const endOfWeek = new Date(startOfWeek);
//         endOfWeek.setDate(startOfWeek.getDate() + 6);
//         return {
//             start: startOfWeek.toLocaleDateString(undefined, { weekday: "short", month: "long", day: "numeric" }),
//             end: endOfWeek.toLocaleDateString(undefined, { weekday: "short", month: "long", day: "numeric" }),
//         };
//     };

//     const weekRange = getWeekRange(currentDate);

//     return (
//         <div className="calendar-page">
//             <Header title="Calendar" subtitle="View and manage your calendar here">
//                 <Button action={() => { }} fill gap type="button" border={false}>
//                     <FiPlus className="fs-body" />
//                     Add Task
//                 </Button>
//             </Header>

//             <div className="week-schedule">
//                 <h2>Weekly Schedule</h2>
//                 <div className="week-details">
//                     <span>{`${weekRange.start} - ${weekRange.end}`}</span>
//                     <div className="controls">
//                         <p>Upcoming Deadline</p>
//                         <div className="arrows">
//                             <FiArrowLeft onClick={() => changeWeek("prev")} />
//                             <FiArrowRight onClick={() => changeWeek("next")} />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="calendar-grid">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>
//                                 <select
//                                     onChange={(e) => {
//                                         console.log(e.target.value);
//                                     }}
//                                 >
//                                     <option value="GMT">GMT</option>
//                                     <option value="PST">PST</option>
//                                     <option value="EST">EST</option>
//                                 </select>
//                             </th>
//                             {[...Array(7)].map((_, i) => {
//                                 const day = new Date(currentDate);
//                                 day.setDate(currentDate.getDate() - currentDate.getDay() + i);
//                                 return (
//                                     <th key={i}>
//                                         {day.toLocaleDateString(undefined, { weekday: "short", day: "numeric" })}
//                                     </th>
//                                 );
//                             })}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[...Array(12)].map((_, i) => (
//                             <tr key={i}>
//                                 <td>{`${7 + i}:00 AM`}</td>
//                                 {[...Array(7)].map((_, j) => (
//                                     <td key={j}>&nbsp;</td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default CalendarPage;




















// import React, { useState } from 'react';
// import { Container, Row, Col, Dropdown, Table, Modal, Form, Button as BootstrapButton } from 'react-bootstrap';
// import './calendar.css';
// import Header from '../Header';
// import Button from "../../../../components/atoms/Button";
// import { FiPlus } from 'react-icons/fi';

// interface Event {
//     day: number;
//     time: string;
//     title: string;
//     description: string;
//     dueDate: string;
//     assignTo: string;
//     color: string;
// }

// const timezones = ['GMT', 'PST', 'EST', 'CET'];

// const Calendar: React.FC = () => {
//     const [events, setEvents] = useState<Event[]>([]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedSlot, setSelectedSlot] = useState<{ day: number; time: string } | null>(null);
//     const [modalData, setModalData] = useState<Partial<Event>>({});
//     const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

//     const hours = Array.from({ length: 12 }, (_, i) => `${i + 7} AM`);
//     const colors = ['#F7E6FF', '#DDE5FF'];

//     const handleAddTaskClick = () => setShowModal(true);

//     const handleSaveChanges = () => {
//         if (selectedSlot && modalData.title && modalData.dueDate && modalData.assignTo) {
//             const newEvent: Event = {
//                 ...modalData,
//                 day: selectedSlot.day,
//                 time: selectedSlot.time,
//                 color: colors[events.length % colors.length], // Alternate colors
//             } as Event;
//             setEvents([...events, newEvent]);
//             setShowModal(false);
//             setModalData({});
//         }
//     };

//     const getEvent = (day: number, time: string) =>
//         events.find((event) => event.day === day && event.time === time);

//     const handleSlotClick = (day: number, time: string) => {
//         const event = getEvent(day, time);
//         if (event) {
//             setSelectedEvent(event);
//         } else {
//             setSelectedSlot({ day, time });
//             setShowModal(true);
//         }
//     };

//     const closeEventDetails = () => setSelectedEvent(null);

//     return (
//         <Container fluid className="p-3">
//             <Header title="Calendar" subtitle="View and manage your calendar here">
//                 <Button action={handleAddTaskClick} fill gap type="button" border={false}>
//                     <FiPlus className="fs-body" />
//                     Add Task
//                 </Button>
//             </Header>

//             <Table bordered>
//                 <thead>
//                     <tr>
//                         <th className="time-column">
//                             <Dropdown>
//                                 <Dropdown.Toggle variant="primary" id="dropdown-basic">
//                                     GMT
//                                 </Dropdown.Toggle>
//                                 <Dropdown.Menu>
//                                     {timezones.map((timezone) => (
//                                         <Dropdown.Item key={timezone}>{timezone}</Dropdown.Item>
//                                     ))}
//                                 </Dropdown.Menu>
//                             </Dropdown>
//                         </th>
//                         <th>Sunday</th>
//                         <th>Monday</th>
//                         <th>Tuesday</th>
//                         <th>Wednesday</th>
//                         <th>Thursday</th>
//                         <th>Friday</th>
//                         <th>Saturday</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {hours.map((hour, index) => (
//                         <tr key={index}>
//                             <td className="time-column">{hour}</td>
//                             {Array.from({ length: 7 }).map((_, dayIndex) => {
//                                 const event = getEvent(dayIndex, hour);
//                                 return (
//                                     <td
//                                         key={dayIndex}
//                                         className="event-slot"
//                                         style={{ backgroundColor: event?.color }}
//                                         onClick={() => handleSlotClick(dayIndex, hour)}
//                                     >
//                                         {event && <span>{event.title}</span>}
//                                     </td>
//                                 );
//                             })}
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             {/* Add Task Modal */}
//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add Task</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group>
//                             <Form.Label>Title</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter title"
//                                 value={modalData.title || ''}
//                                 onChange={(e) =>
//                                     setModalData((prev) => ({ ...prev, title: e.target.value }))
//                                 }
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Description</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 placeholder="Enter description"
//                                 rows={3}
//                                 value={modalData.description || ''}
//                                 onChange={(e) =>
//                                     setModalData((prev) => ({ ...prev, description: e.target.value }))
//                                 }
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Task Due</Form.Label>
//                             <Form.Control
//                                 type="time"
//                                 value={modalData.time || ''}
//                                 onChange={(e) =>
//                                     setModalData((prev) => ({ ...prev, time: e.target.value }))
//                                 }
//                             />
//                             <Form.Control
//                                 type="date"
//                                 value={modalData.dueDate || ''}
//                                 onChange={(e) =>
//                                     setModalData((prev) => ({ ...prev, dueDate: e.target.value }))
//                                 }
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Assign To</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Assign to"
//                                 value={modalData.assignTo || ''}
//                                 onChange={(e) =>
//                                     setModalData((prev) => ({ ...prev, assignTo: e.target.value }))
//                                 }
//                             />
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <BootstrapButton variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </BootstrapButton>
//                     <BootstrapButton variant="primary" onClick={handleSaveChanges}>
//                         Save Changes
//                     </BootstrapButton>
//                 </Modal.Footer>
//             </Modal>

//             {/* Event Details Modal */}
//             <Modal show={!!selectedEvent} onHide={closeEventDetails}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Event Details</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {selectedEvent && (
//                         <>
//                             <p><strong>Title:</strong> {selectedEvent.title}</p>
//                             <p><strong>Description:</strong> {selectedEvent.description}</p>
//                             <p><strong>Due Date:</strong> {selectedEvent.dueDate}</p>
//                             <p><strong>Assigned To:</strong> {selectedEvent.assignTo}</p>
//                         </>
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <BootstrapButton variant="secondary" onClick={closeEventDetails}>
//                         Close
//                     </BootstrapButton>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// };

// export default Calendar;






import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Table } from 'react-bootstrap';
import './calendar.css';
import Header from '../Header';
import Button from "../../../../components/atoms/Button";
import { FiPlus } from 'react-icons/fi';

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

            <Header title="Calendar" subtitle="View and manage your calendar here">
                <Button action={() => { }} fill gap type="button" border={false}>
                    <FiPlus className="fs-body" />
                    Add Task
                </Button>
            </Header>

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
