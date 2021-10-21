import produce, { Draft } from "immer";

import { Event } from "../../models";
import { ActionType, EventDispatchType } from "./actionTypes";

export interface DefaultState {
  loading: boolean;
  events: Event[];
  offset: number;
  error: string;
}

const defaultState: DefaultState = {
  loading: true,
  events: [],
  offset: 0,
  error: "",
};

const reducers = produce(
  (draftState: Draft<DefaultState>, action: EventDispatchType) => {
    switch (action.type) {
      case ActionType.GET_EVENTS_LOADING:
        draftState.loading = true;
        break;
      case ActionType.GET_EVENTS_SUCCESS: {
        const { items } = action.payload;
        draftState.loading = false;
        draftState.events = [...draftState.events, ...items];
        break;
      }
      case ActionType.GET_EVENTS_FAIL: {
        draftState.loading = false;
        draftState.error = `${action.payload}`;
        break;
      }
      case ActionType.SET_EVENT_OFFSET: {
        draftState.offset = parseInt(action.payload, 10);
        break;
      }
      case ActionType.RESET_EVENTS_DATA: {
        // We can not re assign to the draft state directly
        draftState.loading = true;
        draftState.events = [];
        draftState.error = "";
        draftState.offset = 0;
        break;
      }
    }
  },
  defaultState
);

export default reducers;
