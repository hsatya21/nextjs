import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/events-list";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventsList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
