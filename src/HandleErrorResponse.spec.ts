import {
  NoActivityFoundErrorResponse,
  NoActivityFoundErrorResponseMessage,
  SearchQueryArgumentErrorResponse,
  SearchQueryArgumentErrorResponseMessage,
  ActivityRequestErrorResponse,
} from "./types/Errors.js";
import {
  NoActivityFoundError,
  SearchQueryArgumentError,
  UnrecognizedQueryResponseError,
} from "./Errors.js";
import { handleErrorResponse } from "./HandleErrorResponse.js";
import { expect } from "chai";

const url = "http://somesite.com";

describe("Handle Error Response", function () {
  describe("With No Activity Found Error Response", function () {
    const error: NoActivityFoundErrorResponse = {
      error: NoActivityFoundErrorResponseMessage,
    };
    it("should throw TypeError", function () {
      expect(() => handleErrorResponse({ url } as Response, error))
        .to.throw(NoActivityFoundError)
        .that.has.property("message")
        .that.equals(`URL used: ${url}`);
    });
  });
  describe("With Search Query Argument Error Response", function () {
    const error: SearchQueryArgumentErrorResponse = {
      error: SearchQueryArgumentErrorResponseMessage,
    };
    it("should throw TypeError", function () {
      expect(() => handleErrorResponse({ url } as Response, error))
        .to.throw(SearchQueryArgumentError)
        .that.has.property("message")
        .that.equals(`URL used: ${url}`);
    });
  });
  describe("With Unrecognized Error Response", function () {
    const error: ActivityRequestErrorResponse = {
      error: "some error",
    };
    it("should throw TypeError", function () {
      expect(() => handleErrorResponse({ url } as Response, error))
        .to.throw(UnrecognizedQueryResponseError)
        .that.has.property("message")
        .that.equals(
          `URL used: ${url}, Original error message: ${error.error}`
        );
    });
  });
});
