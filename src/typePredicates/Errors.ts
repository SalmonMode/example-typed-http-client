import { hasProperty, isString } from "typed-http-client";
import {
  ActivityRequestErrorResponse,
  NoActivityFoundErrorResponse,
  NoActivityFoundErrorResponseMessage,
  SearchQueryArgumentErrorResponse,
  SearchQueryArgumentErrorResponseMessage,
} from "../types";

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
