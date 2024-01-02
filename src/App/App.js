import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Reservations from '../components/Reservations/Reservations';
import ReservationForm from '../components/ReservationForm/ReservationForm';

function App() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('')

  const getReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response failed, please try again.');
        }
        return response.json();
      })
      .then(data => {
        setReservations(prevReservations => data);
      })
      .catch(error => {
        console.error(
          'There was an error with the fetch operation, please try again later.',
        );
      });
  };

  const postReservation = (newReservation) => {
    return fetch("http://localhost:3001/api/v1/reservations", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReservation),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      console.log(response);
      return response.json();
      })
      .catch((error) => setError(error.message));
    }


  const addReservation = newReservation => {
    const updatedReservations = [...reservations, newReservation];
    setReservations(updatedReservations);
    postReservation(newReservation)
  };

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Turing Cafe Reservations</h1>
      <ReservationForm addReservation={addReservation} />
      <Reservations reservations={reservations} />
    </div>
  );
}

export default App;
