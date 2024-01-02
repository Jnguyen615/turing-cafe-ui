import './App.css';
import React from 'react';
import { useState, useEffect} from 'react'
import Reservations from '../components/Reservations/Reservations'
import ReservationForm from '../components/ReservationForm/ReservationForm';


function App() {
  const [reservations, setReservations] = useState([])

  const getReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response failed, please try again.')
        }
        return response.json()
      })
      .then(data => {
        setReservations(prevReservations => [...prevReservations, ...data]);
      })
      .catch(error => {
        console.error("There was an error with the fetch operation, please try again later.")
      })
  }

  useEffect(() => {
    getReservations()
  }, [])


  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <ReservationForm /> 
      <Reservations reservations={reservations}/> 
    </div>
  );
}

export default App; 