import { hasProperty } from "primitive-predicates/Property";
import { isString } from "primitive-predicates/String";
import {
  NoActivityFoundErrorResponseMessage,
  SearchQueryArgumentErrorResponseMessage,
  type ActivityRequestErrorResponse,
  type NoActivityFoundErrorResponse,
  type SearchQueryArgumentErrorResponse,
} from "../types/Errors.js";

export function isActivityRequestErrorResponse(
  value: object
): value is ActivityRequestErrorResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    hasProperty(value, "error") &&
    isString(value.error)
  );
}
export function isNoActivityFoundErrorResponse(
  value: ActivityRequestErrorResponse
): value is NoActivityFoundErrorResponse {
  return value.error === NoActivityFoundErrorResponseMessage;
}
export function isSearchQueryArgumentErrorResponse(
  value: ActivityRequestErrorResponse
): value is SearchQueryArgumentErrorResponse {
  return value.error === SearchQueryArgumentErrorResponseMessage;
}
