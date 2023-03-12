import { TypedHttpClient } from "typed-http-client";
import { rawActivityProcessor } from "./RawActivityProcessor.js";
import type { Activity, ActivitySearchOptions } from "./types/index.js";

export default class BoredApiClient {
  httpClient: TypedHttpClient;
  private static _baseUrl: URL = new URL(
    "https://www.boredapi.com/api/activity/"
  );
  constructor() {
    this.httpClient = new TypedHttpClient("some-user-agent");
  }
  /**
   * Fetches a random activity according to the search options provided.
   *
   * @param searchOptions The criteria by which to search for an activity
   * @returns A random activity
   */
  async getRandomActivity(
    searchOptions: ActivitySearchOptions = {}
  ): Promise<Activity> {
    const url = this._getRequestUrl(searchOptions);
    const response = await this.httpClient.get({ url }, rawActivityProcessor);
    return response.result;
  }
  /**
   * Get the URL object for making the request.
   *
   * The API relies on a query string for the search parameters, so this function adds those search
   * parameters to a fresh URL object and returns the result.
   *
   * @param searchOptions The criteria by which to search for an activity
   * @returns the URL object to fetch
   */
  private _getRequestUrl(searchOptions: ActivitySearchOptions): URL {
    const url = new URL(BoredApiClient._baseUrl);
    for (let [key, value] of Object.entries(searchOptions)) {
      url.searchParams.set(key, value);
    }
    return url;
  }
}
