import { useRouter } from 'next/router';
import EventList from '../../components/events/eventList';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

function EventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();

  function findEventsHandler(year, month) {
    console.log('findEventsHandler called');
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={allEvents} />
    </>
  );
}

export default EventsPage;
