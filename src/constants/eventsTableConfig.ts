import { readableDate } from "../helpers";
import { Event } from "../models/events";
import { TableColumn } from "../components/Table";

export const eventsTableConfig: TableColumn<Event>[] = [
  {
    header: "Position",
    value: (item) => {
      return item.position.name;
    },
    uniqueKey: (item, index) => item.position.id.toString() + index,
  },
  {
    header: "Start Time",
    value: (item) => {
      return readableDate(item.startsAt);
    },
    uniqueKey: (item, index) => item.startsAt + index,
  },
  {
    header: "End Time",
    value: (item) => {
      return readableDate(item.endsAt);
    },
    uniqueKey: (item, index) => item.endsAt + index,
  },
];
