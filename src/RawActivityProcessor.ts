import { assertIsObject, ResponseProcessorParams } from "typed-http-client";
import { handleErrorResponse } from "./HandleErrorResponse";
import {
  assertIsRawActivity,
  isActivityRequestErrorResponse,
} from "./typePredicates";
import { Activity } from "./types";

export function rawActivityProcessor({
  response,
  responseBodyAsObject,
}: ResponseProcessorParams): Activity {
  assertIsObject(responseBodyAsObject);
  if (isActivityRequestErrorResponse(responseBodyAsObject)) {
    return handleErrorResponse(response, responseBodyAsObject);
  }
  assertIsRawActivity(responseBodyAsObject);
  const activity: Activity = {
    activity: responseBodyAsObject.activity,
    accessibility: responseBodyAsObject.accessibility,
    type: responseBodyAsObject.type,
    participants: responseBodyAsObject.participants,
    price: responseBodyAsObject.price,
    key: responseBodyAsObject.key,
  };
  if (responseBodyAsObject.link.length > 0) {
    activity.link = new URL(responseBodyAsObject.link);
  }
  return activity;
}
