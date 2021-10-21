export interface PaginatedEvents {
  items: Event[];
  pagination: Pagination;
}

export interface Event {
  id: number;
  position: Position;
  startsAt: string;
  endsAt: string;
}

export interface Position {
  name: string;
  color: string;
  id: number;
}

export interface Pagination {
  offset: number;
  limit: number;
  count: number;
}

export interface GetEventsPayload {
  startsAt?: string;
  endsAt?: string;
  offset?: number;
  limit?: number;
}

export interface GetEventPayload {
  id: number;
}

export interface EventDetails {
  id: number;
  startsAt: string;
  endsAt: string;
  position: Position;
  employees: Employee[];
}

export interface Employee {
  id: number;
  image: string;
  lastName: string;
  firstName: string;
}
