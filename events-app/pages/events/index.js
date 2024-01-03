import EventList from '../../components/events/eventList';
import { getAllEvents } from '../../dummy-data';

function EventsPage() {
  const allEvents = getAllEvents();
  return (
    <div>
      <h1>All Events Page</h1>
      <EventList events={allEvents} />
    </div>
  );
}

export default EventsPage;
