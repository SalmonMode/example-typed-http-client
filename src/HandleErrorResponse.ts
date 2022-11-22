import {
  NoActivityFoundError,
  SearchQueryArgumentError,
  UnrecognizedQueryResponseError,
} from "./Errors";
import {
  isNoActivityFoundErrorResponse,
  isSearchQueryArgumentErrorResponse,
} from "./typePredicates";
import { ActivityRequestErrorResponse } from "./types";

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
