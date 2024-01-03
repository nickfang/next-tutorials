import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/even-detail/event-summary';
import EventLogistics from '../../components/even-detail/event-logistics';
import EventContent from '../../components/even-detail/event-content';

function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
