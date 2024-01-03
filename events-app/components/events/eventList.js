import EventItem from './eventItem';
import classes from './eventList.module.css';

function EventList(props) {
  const { events } = props;
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
