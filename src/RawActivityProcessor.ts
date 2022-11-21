import { ResponseProcessorParams } from "typed-http-client";
import { assertIsRawActivity } from "./typePredicates";
import { Activity } from "./types";

export function rawActivityProcessor({
  responseBodyAsObject,
}: Partial<ResponseProcessorParams>): Activity {
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
