import * as chai from "chai";
import {
  ActivityType,
  NoActivityFoundErrorResponse,
  NoActivityFoundErrorResponseMessage,
  SearchQueryArgumentErrorResponse,
  SearchQueryArgumentErrorResponseMessage,
} from "../types";
import {
  isActivityRequestErrorResponse,
  isNoActivityFoundErrorResponse,
  isSearchQueryArgumentErrorResponse,
} from "./Errors";

var expect = chai.expect;

const noActivityFoundError: NoActivityFoundErrorResponse = {
  error: NoActivityFoundErrorResponseMessage,
};
const searchQueryParamError: SearchQueryArgumentErrorResponse = {
  error: SearchQueryArgumentErrorResponseMessage,
};
const unrecognizedError = {
  error: "some message",
};

describe("Error Response type predicates", function () {
  describe("ActivityRequestErrorResponse", function () {
    describe("NoActivityFoundErrorResponse", function () {
      it("should be true", function () {
        expect(isActivityRequestErrorResponse(noActivityFoundError)).to.be.true;
      });
    });
    describe("SearchQueryArgumentErrorResponse", function () {
      it("should be true", function () {
        expect(isActivityRequestErrorResponse(searchQueryParamError)).to.be
          .true;
      });
    });
    describe("Unrecognized Error Message", function () {
      it("should be true", function () {
        expect(isActivityRequestErrorResponse(unrecognizedError)).to.be.true;
      });
    });
    describe("Activity", function () {
      it("should be false", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          type: ActivityType.Busywork,
          participants: 1,
          price: 0,
          key: "12345",
          link: "",
        };
        expect(isActivityRequestErrorResponse(activity)).to.be.false;
      });
    });
    describe("Empty Object", function () {
      it("should be false", function () {
        expect(isActivityRequestErrorResponse({})).to.be.false;
      });
    });
    describe("Array", function () {
      it("should be false", function () {
        expect(isActivityRequestErrorResponse([])).to.be.false;
      });
    });
  });
  describe("NoActivityFound", function () {
    describe("NoActivityFoundErrorResponse", function () {
      it("should be true", function () {
        expect(isNoActivityFoundErrorResponse(noActivityFoundError)).to.be.true;
      });
    });
    describe("SearchQueryArgumentErrorResponse", function () {
      it("should be false", function () {
        expect(isNoActivityFoundErrorResponse(searchQueryParamError)).to.be
          .false;
      });
    });
    describe("Unrecognized Error Message", function () {
      it("should be false", function () {
        expect(isNoActivityFoundErrorResponse(unrecognizedError)).to.be.false;
      });
    });
  });
  describe("SearchQueryArgument", function () {
    describe("SearchQueryArgumentErrorResponse", function () {
      it("should be true", function () {
        expect(isSearchQueryArgumentErrorResponse(searchQueryParamError)).to.be
          .true;
      });
    });
    describe("NoActivityFoundErrorResponse", function () {
      it("should be false", function () {
        expect(isSearchQueryArgumentErrorResponse(noActivityFoundError)).to.be
          .false;
      });
    });
    describe("Unrecognized Error Message", function () {
      it("should be false", function () {
        expect(isSearchQueryArgumentErrorResponse(unrecognizedError)).to.be
          .false;
      });
    });
  });
});
