import {
  NoActivityFoundError,
  SearchQueryArgumentError,
  UnrecognizedQueryResponseError,
} from "./Errors.js";
import {
  isNoActivityFoundErrorResponse,
  isSearchQueryArgumentErrorResponse,
} from "./typePredicates/Errors.js";
import type { ActivityRequestErrorResponse } from "./types/Errors.js";

export function handleErrorResponse(
  response: Response,
  errorDetails: ActivityRequestErrorResponse
): never {
  if (isNoActivityFoundErrorResponse(errorDetails)) {
    throw new NoActivityFoundError(`URL used: ${response.url}`);
  } else if (isSearchQueryArgumentErrorResponse(errorDetails)) {
    throw new SearchQueryArgumentError(`URL used: ${response.url}`);
  }
  throw new UnrecognizedQueryResponseError(
    `URL used: ${response.url}, Original error message: ${errorDetails.error}`
  );
}
