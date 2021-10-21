import queryString from "query-string";
import { useDispatch } from "react-redux";
import {
  RangeWithKey,
  DateRangePicker,
  OnDateRangeChangeProps,
} from "react-date-range";
import { useHistory } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, ReactElement } from "react";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { getDefaultRange, useQuery } from "../helpers";
import { resetEventData } from "../store/events/actions";

interface ModalWithDateFilters {
  isOpen: boolean;
  closeModal: () => void;
}

function ModalWithDateFilters({
  isOpen,
  closeModal,
}: ModalWithDateFilters): ReactElement {
  const history = useHistory();
  const queryParams = useQuery();
  const dispatch = useDispatch();

  const [dateRanges, setDateRages] = useState<RangeWithKey>(() =>
    getDefaultRange(queryParams)
  );

  const handleSelect = (ranges: OnDateRangeChangeProps) => {
    const { startDate, endDate } = ranges.selection;
    setDateRages((prevState) => ({ ...prevState, startDate, endDate }));
  };

  const handleClose = () => {
    closeModal();
    setDateRages({ ...getDefaultRange(queryParams) });
  };

  const handleSubmit = () => {
    dispatch(resetEventData());
    closeModal();
    const { startDate, endDate } = dateRanges;
    const queryStaring = queryString.stringify({
      ...queryParams,
      startDate: startDate?.toISOString(),
      endDate: endDate?.toISOString(),
    });
    history.push(`?${queryStaring}`);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-max p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900 mb-3 pb-3 border-b"
              >
                Select Date Filters
              </Dialog.Title>

              <DateRangePicker
                ranges={[dateRanges]}
                onChange={handleSelect}
                rangeColors={["#9864f6"]}
              />

              <div className="mt-4 text-right">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ModalWithDateFilters;
