import EventList from '../../components/events/eventList';
import { getFeaturedEvents } from '../../dummy-data';

function EventsPage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>All Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default EventsPage;
