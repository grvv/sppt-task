import { Dispatch } from "redux";
import { ActionType, EventDispatchType } from "./actionTypes";
import { GetEventsPayload, PaginatedEvents } from "../../models";

import http from "../../http-common";

export const getEvents =
  (payload: GetEventsPayload) =>
  async (dispatch: Dispatch<EventDispatchType>) => {
    try {
      dispatch({
        type: ActionType.GET_EVENTS_LOADING,
      });

      const res = await http.get<PaginatedEvents>("/events", {
        params: { ...payload },
      });

      dispatch({
        type: ActionType.GET_EVENTS_SUCCESS,
        payload: res.data,
      });
    } catch (e: any) {
      dispatch({
        type: ActionType.GET_EVENTS_FAIL,
        payload: e.message,
      });
    }
  };

export const resetEventData = () => ({ type: ActionType.RESET_EVENTS_DATA });

export const setEventOffset = (offsetValue: number) => ({
  type: ActionType.SET_EVENT_OFFSET,
  payload: offsetValue,
});
