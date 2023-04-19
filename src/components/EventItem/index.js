// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onEventItemClicked} = props
  const {name, imageUrl, location, id, registrationStatus} = eventDetails

  const onButtonClick = () => {
    console.log('clicked', id)
    onEventItemClicked(registrationStatus)
  }
  return (
    <li>
      <button type="button" onClick={onButtonClick}>
        <img src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
