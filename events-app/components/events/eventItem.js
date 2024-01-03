import Link from 'next/link';

function EventItem(props) {
  const { title, image, date, location, id } = props.event;

  return (
    <li>
      <img src="" alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{date}</time>
          </div>
          <div>
            <address>{location}</address>
          </div>
        </div>
        <div>
          <Link href="/">Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
