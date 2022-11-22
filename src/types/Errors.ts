export interface ActivityRequestErrorResponse {
  error: string;
}
export const NoActivityFoundErrorResponseMessage =
  "No activity found with the specified parameters" as const;
export const SearchQueryArgumentErrorResponseMessage =
  "Failed to query due to error in arguments" as const;
export interface NoActivityFoundErrorResponse
  extends ActivityRequestErrorResponse {
  error: typeof NoActivityFoundErrorResponseMessage;
}
export interface SearchQueryArgumentErrorResponse
  extends ActivityRequestErrorResponse {
  error: typeof SearchQueryArgumentErrorResponseMessage;
}
