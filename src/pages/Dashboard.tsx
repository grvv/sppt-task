import { useHistory } from "react-router-dom";
import { useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "../components/Table";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { useMemoQuery } from "../helpers";
import { eventsTableConfig } from "../constants";
import {
  getEvents,
  resetEventData,
  setEventOffset,
} from "../store/events/actions";
import {
  selectEventOffset,
  selectEventsState,
} from "../store/events/selectors";
import { Event } from "../models";

const LIMIT = 10;

function Dashboard(): ReactElement {
  const history = useHistory();
  const queryParams = useMemoQuery();

  const dispatch = useDispatch();
  const { loading, events } = useSelector(selectEventsState);
  const offset = useSelector(selectEventOffset);

  useEffect(() => {
    dispatch(getEvents({ ...queryParams, offset, limit: LIMIT }));
  }, [queryParams, dispatch, offset]);

  useEffect(() => {
    return () => {
      dispatch(resetEventData());
    };
  }, [dispatch]);

  const rowClickHandler = (
    e: React.MouseEvent<HTMLElement>,
    eventItem: Event
  ) => {
    const { id } = eventItem;
    history.push(`/event/${id}`);
  };

  return (
    <>
      {events.length ? (
        <Table
          data={events}
          className="overflow-auto"
          columns={eventsTableConfig}
          rowClickHandler={rowClickHandler}
          idExtractor={(data) => data.id.toString()}
        >
          <div className="flex justify-center">
            {loading ? (
              <Loader />
            ) : (
              <Button onClick={() => dispatch(setEventOffset(offset + LIMIT))}>
                Load More
              </Button>
            )}
          </div>
        </Table>
      ) : (
        <div className="flex justify-center">
          {loading ? <Loader /> : "No Events found!"}
        </div>
      )}
    </>
  );
}

export default Dashboard;
