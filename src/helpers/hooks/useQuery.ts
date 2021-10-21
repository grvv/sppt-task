import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useDeepCompareMemoize } from "./useDeepCompareMemoize";

export function useQuery() {
  return queryString.parse(useLocation().search);
}

export function useMemoQuery() {
  return useDeepCompareMemoize(queryString.parse(useLocation().search));
}
