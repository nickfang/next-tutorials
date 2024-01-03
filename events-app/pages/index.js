import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link href="/events">Events</Link>
    </div>
  );
}

export default HomePage;
