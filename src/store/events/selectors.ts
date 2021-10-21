import { RootStore } from "..";

export const selectEventsState = (state: RootStore) => state.events;
export const selectEventOffset = (state: RootStore) => state.events.offset;
