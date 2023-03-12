import * as chai from "chai";
import { ActivityType } from "../types/Activity.js";
import { assertIsRawActivity, isActivityType } from "./Activity.js";

var expect = chai.expect;

describe("ActivityType type predicate", function () {
  describe("Education", function () {
    it("should be true", function () {
      expect(isActivityType(ActivityType.Education)).to.be.true;
    });
  });
  describe("Recreational", function () {
    it("should be true", function () {
      expect(isActivityType(ActivityType.Recreational)).to.be.true;
    });
  });
  describe("Social", function () {
    it("should be true", function () {
      expect(isActivityType(ActivityType.Social)).to.be.true;
    });
  });
  describe("DIY", function () {
    it("should be true", function () {
      expect(isActivityType(ActivityType.DIY)).to.be.true;
    });
  });
  describe("Charity", function () {
    it("should be true", function () {
      expect(isActivityType(ActivityType.Charity)).to.be.true;
    });
  });
  describe("Cooking", function () {
    it("should be true", function () {
      expect(isActivityType(ActivityType.Cooking)).to.be.true;
    });
  });
  describe("Relaxation", function () {
    it("should be true", function () {
      expect(isActivityType(ActivityType.Relaxation)).to.be.true;
    });
  });
  describe("Music", function () {
    it("should be true", function () {
      expect(isActivityType(ActivityType.Music)).to.be.true;
    });
  });
  describe("Busywork", function () {
    it("should be true", function () {
      expect(isActivityType(ActivityType.Busywork)).to.be.true;
    });
  });
  describe("Empty Object", function () {
    it("should be false", function () {
      expect(isActivityType({})).to.be.false;
    });
  });
  describe("Empty String", function () {
    it("should be false", function () {
      expect(isActivityType("")).to.be.false;
    });
  });
  describe("Invalid String", function () {
    it("should be false", function () {
      expect(isActivityType("Invalid")).to.be.false;
    });
  });
  describe("Number", function () {
    it("should be false", function () {
      expect(isActivityType(3)).to.be.false;
    });
  });
  describe("Null", function () {
    it("should be false", function () {
      expect(isActivityType(null)).to.be.false;
    });
  });
  describe("Boolean", function () {
    it("should be false", function () {
      expect(isActivityType(true)).to.be.false;
    });
  });
  describe("Array", function () {
    it("should be false", function () {
      expect(isActivityType([])).to.be.false;
    });
  });
  describe("Undefined", function () {
    it("should be false", function () {
      expect(isActivityType(undefined)).to.be.false;
    });
  });
});
describe("RawActivity type assertion", function () {
  describe("Valid (with empty link)", function () {
    it("should not throw error", function () {
      const activity = {
        activity: "Some activity",
        accessibility: 0.0,
        type: ActivityType.Busywork,
        participants: 1,
        price: 0,
        key: "12345",
        link: "",
      };
      expect(assertIsRawActivity(activity)).to.be.undefined;
    });
  });
  describe("Valid (with full link)", function () {
    it("should not throw error", function () {
      const activity = {
        activity: "Some activity",
        accessibility: 0.0,
        type: ActivityType.Busywork,
        participants: 1,
        price: 0,
        key: "12345",
        link: "https://www.example.com/",
      };
      expect(assertIsRawActivity(activity)).to.be.undefined;
    });
  });
  describe("Invalid", function () {
    describe("Missing activity", function () {
      it("should throw TypeError", function () {
        const activity = {
          accessibility: 0.0,
          type: ActivityType.Busywork,
          participants: 1,
          price: 0,
          key: "12345",
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Missing accessibility", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          type: ActivityType.Busywork,
          participants: 1,
          price: 0,
          key: "12345",
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Missing type", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          participants: 1,
          price: 0,
          key: "12345",
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Missing participants", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          type: ActivityType.Busywork,
          price: 0,
          key: "12345",
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Missing price", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          type: ActivityType.Busywork,
          participants: 1,
          key: "12345",
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Missing key", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          type: ActivityType.Busywork,
          participants: 1,
          price: 0,
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Missing link", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          type: ActivityType.Busywork,
          participants: 1,
          price: 0,
          key: "12345",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Invalid 'activity' type", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: 23,
          accessibility: 0.0,
          type: ActivityType.Busywork,
          participants: 1,
          price: 0,
          key: "12345",
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Invalid 'accessibility' type", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: "0.0",
          type: ActivityType.Busywork,
          participants: 1,
          price: 0,
          key: "12345",
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Invalid 'type' type", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          type: 123,
          participants: 1,
          price: 0,
          key: "12345",
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Invalid 'participants' type", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          type: ActivityType.Busywork,
          participants: "1",
          price: 0,
          key: "12345",
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Invalid 'price' type", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          type: ActivityType.Busywork,
          participants: 1,
          price: "0",
          key: "12345",
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Invalid 'key' type", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          type: ActivityType.Busywork,
          participants: 1,
          price: 0,
          key: 12345,
          link: "https://www.example.com/",
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Invalid 'link' type", function () {
      it("should throw TypeError", function () {
        const activity = {
          activity: "Some activity",
          accessibility: 0.0,
          type: ActivityType.Busywork,
          participants: 1,
          price: 0,
          key: "12345",
          link: 123,
        };
        expect(() => assertIsRawActivity(activity)).to.throw(TypeError);
      });
    });
    describe("Empty Object", function () {
      it("should throw a type error", function () {
        expect(() => assertIsRawActivity({})).to.throw(TypeError);
      });
    });
    describe("Array", function () {
      it("should throw a type error", function () {
        expect(() => assertIsRawActivity([])).to.throw(TypeError);
      });
    });
  });
});
