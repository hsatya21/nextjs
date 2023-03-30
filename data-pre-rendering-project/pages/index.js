import { getFeaturedEvents } from "../helpers/api-utils";
import EventsList from "../components/events/events-list";

const HomePage = (props) => {
  // console.log(props.events);
  return (
    <div>
      <EventsList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
