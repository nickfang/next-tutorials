import { useRouter } from 'next/router';

function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;
  return (
    <div>
      <h1>Event Detail Page</h1>
    </div>
  );
}

export default EventDetailPage;
