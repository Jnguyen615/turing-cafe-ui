import './Reservations.css';
import ReservationCard from '../ReservationCard/ReservationCard';

const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map(reservation => {
    return (
      <ReservationCard
        id={reservation.id}
        key={`${reservation.number}-${reservation.id}`}
        name={reservation.name}
        number={reservation.number}
        date={reservation.date}
        time={reservation.time}
      />
    );
  });

  return <div className="reservation-container">{reservationCards}</div>;
};

export default Reservations;
