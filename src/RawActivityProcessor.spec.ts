import * as chai from "chai";
import { rawActivityProcessor } from "./RawActivityProcessor";
import { Activity, ActivityType } from "./types";

var expect = chai.expect;

describe("RawActivity Response Processor", function () {
  describe("With Link", function () {
    const rawActivity = {
      activity: "Some activity",
      accessibility: 0.0,
      type: ActivityType.Busywork,
      participants: 1,
      price: 0,
      key: "12345",
      link: "https://www.example.com/",
    };
    const expectedActivity: Activity = {
      activity: "Some activity",
      accessibility: 0.0,
      type: ActivityType.Busywork,
      participants: 1,
      price: 0,
      key: "12345",
      link: new URL("https://www.example.com/"),
    };
    it("should produce the expected Activity object", function () {
      expect(
        rawActivityProcessor({
          response: {} as Response,
          responseBodyAsString: "",
          responseBodyAsObject: rawActivity,
        })
      ).to.deep.equal(expectedActivity);
    });
  });
  describe("With Empty Link", function () {
    const rawActivity = {
      activity: "Some activity",
      accessibility: 0.0,
      type: ActivityType.Busywork,
      participants: 1,
      price: 0,
      key: "12345",
      link: "",
    };
    const expectedActivity: Activity = {
      activity: "Some activity",
      accessibility: 0.0,
      type: ActivityType.Busywork,
      participants: 1,
      price: 0,
      key: "12345",
    };
    it("should produce the expected Activity object", function () {
      expect(
        rawActivityProcessor({
          response: {} as Response,
          responseBodyAsString: "",
          responseBodyAsObject: rawActivity,
        })
      ).to.deep.equal(expectedActivity);
    });
  });
  describe("With Invalid Link", function () {
    const rawActivity = {
      activity: "Some activity",
      accessibility: 0.0,
      type: ActivityType.Busywork,
      participants: 1,
      price: 0,
      key: "12345",
      link: "1234",
    };
    it("should throw TypeError", function () {
      expect(() =>
        rawActivityProcessor({
          response: {} as Response,
          responseBodyAsString: "",
          responseBodyAsObject: rawActivity,
        })
      ).to.throw(TypeError);
    });
  });
  describe("With Invalid RawActivity", function () {
    const rawActivity = {
      activity: 123,
      accessibility: 0.0,
      type: ActivityType.Busywork,
      participants: 1,
      price: 0,
      key: "12345",
      link: "",
    };
    it("should throw TypeError", function () {
      expect(() =>
        rawActivityProcessor({
          response: {} as Response,
          responseBodyAsString: "",
          responseBodyAsObject: rawActivity,
        })
      ).to.throw(TypeError);
    });
  });
});
