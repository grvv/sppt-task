import { format, parseISO } from "date-fns";
import { RangeWithKey } from "react-date-range";

export const getDefaultRange = (params: any): RangeWithKey => {
  const { startDate, endDate } = params;

  return {
    startDate: startDate ? parseISO(startDate) : new Date(),
    endDate: endDate ? parseISO(endDate) : new Date(),
    key: "selection",
  };
};

export const readableDate = (date: string) => format(parseISO(date), "PPpp");
