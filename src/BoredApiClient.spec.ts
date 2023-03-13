import * as chai from "chai";
import { default as chaiAsPromised } from "chai-as-promised";
import { type Body, default as nock } from "nock";
import BoredApiClient from "./index.js";
import {
  type Activity,
  ActivityType,
  type RawActivity,
} from "./types/index.js";

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("BoredApiClient", function () {
  describe("No Options", function () {
    let client: BoredApiClient;
    let result: Activity;
    const rawActivity: RawActivity = {
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
    before(async function () {
      client = new BoredApiClient();
      nock("https://www.boredapi.com/api/activity/")
        .get(new RegExp("/.*"))
        .reply(200, rawActivity);
      result = await client.getRandomActivity();
    });

    after(function () {
      nock.cleanAll();
    });
    it("produces expected activity", function () {
      expect(result).to.deep.equal(expectedActivity);
    });
  });
  describe("With Options", function () {
    let requestUri: string;
    let client: BoredApiClient;
    let result: Activity;
    const rawActivity: RawActivity = {
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
    const options = {
      key: "12345",
      type: ActivityType.Busywork,
      participants: 1,
      accessibility: 0.0,
      price: 0,
    };
    const anticipatedUrl = new URL("https://www.boredapi.com/api/activity/");
    for (const [key, value] of Object.entries(options)) {
      const valueAsString = value.toString();
      anticipatedUrl.searchParams.set(key, valueAsString);
    }
    before(async function () {
      client = new BoredApiClient();
      nock("https://www.boredapi.com/api/activity/")
        .get(new RegExp("/.*"))
        .reply(200, function (uri: string, _: Body): RawActivity {
          requestUri = uri;
          return rawActivity;
        });
      result = await client.getRandomActivity(options);
    });

    after(function () {
      nock.cleanAll();
    });
    it("produces expected activity", function () {
      expect(result).to.deep.equal(expectedActivity);
    });
    it("went to the anticipated URL", function () {
      expect(
        new URL(requestUri, "https://www.boredapi.com/api/activity/")
      ).to.deep.equal(anticipatedUrl);
    });
  });
  describe("Actual request", function () {
    let client: BoredApiClient;
    before(async function () {
      client = new BoredApiClient();
    });
    it("should not throw an error", async function () {
      await expect(client.getRandomActivity()).to.eventually.be.fulfilled;
    });
  });
});
