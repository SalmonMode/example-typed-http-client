import { hasProperty, isString } from "typed-http-client";
import { ActivityType, RawActivity } from "../types";

export function assertIsActivityType(
  value: unknown
): asserts value is ActivityType {
  if (!isString(value)) {
    throw new TypeError("Value is not ActivityType");
  }
  if (!Object.values(ActivityType).includes(value as ActivityType)) {
    throw new TypeError(`Value (${value}) is not ActivityType`);
  }
}
export function isActivityType(value: unknown): value is ActivityType {
  try {
    assertIsActivityType(value);
    return true;
  } catch {
    return false;
  }
}
export function assertIsRawActivity(
  value: unknown
): asserts value is RawActivity {
  if (typeof value !== "object" || value === null) {
    throw new TypeError(`Value is not RawActivity: ${JSON.stringify(value)}`);
  }
  // Check to see if it even has the required keys
  if (
    !hasProperty(value, "activity") ||
    !hasProperty(value, "accessibility") ||
    !hasProperty(value, "type") ||
    !hasProperty(value, "participants") ||
    !hasProperty(value, "price") ||
    !hasProperty(value, "key") ||
    !hasProperty(value, "link")
  ) {
    throw new TypeError(`Value is not RawActivity: ${JSON.stringify(value)}`);
  }
  // Check the type of each key
  if (
    !isString(value.activity) ||
    !Number.isFinite(value.accessibility) ||
    !isActivityType(value.type) ||
    !Number.isFinite(value.participants) ||
    !Number.isFinite(value.price) ||
    !isString(value.key) ||
    !isString(value.link)
  ) {
    throw new TypeError(`Value is not RawActivity: ${JSON.stringify(value)}`);
  }
}
