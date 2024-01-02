import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = ({ addReservation }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    number: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const clearInput = () => {
    setFormData({
      name: '',
      date: '',
      time: '',
      number: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, date, time, number } = formData;
    if (name && date && time && number) {
      console.log('Form submitted:', formData);
      addReservation(formData);
      clearInput();
    } else {
      setErrorMessage('Please fill out all fields');
    }
  };

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="date"
            placeholder="Date (mm/dd)"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="time"
            placeholder="Time"
            value={formData.time}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="number"
            placeholder="Number of Guests"
            value={formData.number}
            onChange={handleChange}
          />
        </label>
        <button className="make-reservaion-btn" type="submit">
          Make Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
