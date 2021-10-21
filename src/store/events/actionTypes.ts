import { PaginatedEvents } from "../../models";

export enum ActionType {
  GET_EVENTS_LOADING = "GET_EVENTS_LOADING",
  GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS",
  GET_EVENTS_FAIL = "GET_EVENTS_FAIL",
  SET_EVENT_OFFSET = "SET_EVENT_OFFSET",
  RESET_EVENTS_DATA = "RESET_EVENTS_DATA",
}

interface EventsLoading {
  type: ActionType.GET_EVENTS_LOADING;
}

interface EventsSuccess {
  type: ActionType.GET_EVENTS_SUCCESS;
  payload: PaginatedEvents;
}

interface EventsFail {
  type: ActionType.SET_EVENT_OFFSET;
  payload: string;
}

interface SetEventOffset {
  type: ActionType.GET_EVENTS_FAIL;
  payload: number;
}

interface ResetEventsData {
  type: ActionType.RESET_EVENTS_DATA;
}

export type EventDispatchType =
  | EventsLoading
  | EventsSuccess
  | EventsFail
  | ResetEventsData
  | SetEventOffset;
