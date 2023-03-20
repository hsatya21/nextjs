import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventsList from "../../components/events/events-list";
import EvevntsSearch from "../../components/events/evevnts-search";

const AllEventsPage = () => {
  const router = useRouter();

  const allEvents = getAllEvents();

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

export default AllEventsPage;
