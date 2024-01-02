import React, { useState } from 'react';

const ReservationForm = ({ addReservation }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const clearInput = () => {
    setFormData({
      name: '',
      date: '',
      time: '',
      guests: '',
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
    const { name, date, time, guests } = formData;
    if (name && date && time && guests) {
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
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </label>
        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
