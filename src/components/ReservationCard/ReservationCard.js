import "./ReservationCard.css"

const ReservationCard = ( { name, number, date, time, id}) => {
  return (
    <div className='reservation-card'>
      <h2>{name}</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number of Guests: {number}</p>
      <button clasName='cancel-btn'>Cancel</button>
    </div>
  )

}

export default ReservationCard