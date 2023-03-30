import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-utils";
import EventsList from "../../components/events/events-list";
import EvevntsSearch from "../../components/events/evevnts-search";

const AllEventsPage = (props) => {
  const router = useRouter();

  const { allEvents } = props;

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EvevntsSearch onSearch={findEventsHandler} />
      <EventsList items={allEvents} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      allEvents: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
