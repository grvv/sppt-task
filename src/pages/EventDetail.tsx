import { ReactElement } from "react";
import { useHistory, useParams } from "react-router-dom";

import Loader from "../components/Loader";
import { Employee, EventDetails } from "../models";
import { readableDate, useAxios } from "../helpers";
import Table, { TableColumn } from "../components/Table";
import Button from "../components/Button";

export const EVENT_DETAIL_TABLE_CONFIG: TableColumn<Employee>[] = [
  {
    header: "ID",
    value: ({ id }) => id.toString(),
    uniqueKey: ({ id }) => id.toString(),
  },
  {
    header: "Name",
    value: ({ firstName, lastName, image }) => {
      return (
        <>
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={image} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {firstName} {lastName}
            </div>
          </div>
        </>
      );
    },
    uniqueKey: ({ firstName, lastName }, index) =>
      `${firstName}-${lastName}-${index}`,
  },
];

function EventDetail(): ReactElement {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const { loading, error, response } = useAxios<EventDetails>({
    url: `/events/${+id}`,
  });

  if (loading || error) {
    return (
      <div className="flex justify-center">
        {loading ? <Loader /> : "No Details found"}
      </div>
    );
  }

  const { position, startsAt, endsAt, employees } = response?.data || {};

  return (
    <div className="bg-white shadow overflow-auto sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 my-2">
        <h2 className="flex justify-between text-base my-3 text-indigo-600 font-semibold tracking-wide uppercase">
          Event Details
          <Button onClick={() => history.goBack()}>Go Back!</Button>
        </h2>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {position?.name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Starts At: {readableDate(startsAt || "")}
        </p>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Ends At: {readableDate(endsAt || "")}
        </p>
      </div>
      <div className="border-t border-gray-200 px-6 my-2">
        <h2 className="text-base my-3 text-indigo-600 font-semibold tracking-wide uppercase">
          Employees
        </h2>
        {employees?.length ? (
          <Table
            data={employees}
            columns={EVENT_DETAIL_TABLE_CONFIG}
            idExtractor={({ id: uniqueId }) => uniqueId.toString()}
          />
        ) : (
          <div className="flex justify-center my-10">
            No Employees in this event.
          </div>
        )}
      </div>
    </div>
  );
}

export default EventDetail;
