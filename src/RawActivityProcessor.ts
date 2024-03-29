import { assertIsObject } from "primitive-predicates/Object";
import type { ResponseProcessorParams } from "typed-http-client/types/TypedHttpClient";
import { handleErrorResponse } from "./HandleErrorResponse.js";
import { assertIsRawActivity } from "./typePredicates/Activity.js";
import { isActivityRequestErrorResponse } from "./typePredicates/Errors.js";
import type { Activity } from "./types/Activity.js";

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
