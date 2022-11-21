export enum ActivityType {
  Education = "education",
  Recreational = "recreational",
  Social = "social",
  DIY = "diy",
  Charity = "charity",
  Cooking = "cooking",
  Relaxation = "relaxation",
  Music = "music",
  Busywork = "busywork",
}

/**
 * An unprocessed activity provided by the API.
 */
export interface RawActivity {
  /**
   * The description of the activity.
   */
  activity: string;
  /**
   * A factor describing how possible an event is to do, ranging from 0.0 to 1.0 with 0.0 being the most accessible.
   */
  accessibility: number;
  /**
   * Type of the activity
   */
  type: ActivityType;
  /**
   * The number of people that this activity could involve.
   */
  participants: number;
  /**
   * A factor describing the cost of the event with 0 being free.
   */
  price: number;
  /**
   * A unique numeric ID for the activity, represented as a string.
   */
  key: string;
  /**
   * Is empty string if there's no associated URL with the activity.
   */
  link: string;
}
/**
 * An activity.
 */
export interface Activity {
  /**
   * The description of the activity.
   */
  activity: string;
  /**
   * A factor describing how possible an event is to do, ranging from 0.0 to 1.0 with 0.0 being the most accessible.
   */
  accessibility: number;
  /**
   * Type of the activity
   */
  type: ActivityType;
  /**
   * The number of people that this activity could involve.
   */
  participants: number;
  /**
   * A factor describing the cost of the event with 0 being free.
   */
  price: number;
  /**
   * A unique numeric ID for the activity, represented as a string.
   */
  key: string;
  /**
   * The URL of the associated activity. Will not be provided if there is no associated URL.
   */
  link?: URL;
}

export interface ActivitySearchOptionsBase {
  key?: string;
  type?: ActivityType;
  participants?: number;
}
export interface ActivitySearchOptionsWithPriceAndAccessibility
  extends ActivitySearchOptionsBase {
  price?: number;
  accessibility?: number;
}
export interface ActivitySearchOptionsWithPriceRangeAndAccessibility
  extends ActivitySearchOptionsBase {
  minprice?: number;
  maxprice?: number;
  accessibility?: number;
}
export interface ActivitySearchOptionsWithPriceRangeAndAccessibilityRange
  extends ActivitySearchOptionsBase {
  minprice?: number;
  maxprice?: number;
  minaccessibility?: number;
  maxaccessibility?: number;
}
export interface ActivitySearchOptionsWithPriceAndAccessibilityRange
  extends ActivitySearchOptionsBase {
  price?: number;
  minaccessibility?: number;
  maxaccessibility?: number;
}
export type ActivitySearchOptions =
  | ActivitySearchOptionsWithPriceAndAccessibility
  | ActivitySearchOptionsWithPriceRangeAndAccessibility
  | ActivitySearchOptionsWithPriceRangeAndAccessibilityRange
  | ActivitySearchOptionsWithPriceAndAccessibilityRange;
