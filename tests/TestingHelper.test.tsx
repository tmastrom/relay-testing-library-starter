import { act, screen } from "@testing-library/react";
import TestingHelper from "../src/TestingHelper";

describe("TestingHelper", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("reinit function does what it should (creates an environment, sets an error, creates a mock router", () => {});

  it("setMockRouterValues function creates a mock router with the desired values", () => {
    const testingHelper = new TestingHelper();
    testingHelper.setMockRouterValues({
      pathname: "test-pathname",
      route: "test-route",
      query: { testkey: "testvalue" },
    });
    expect(testingHelper.router).toEqual(
      expect.objectContaining({
        pathname: "test-pathname",
        route: "test-route",
        query: { testkey: "testvalue" },
      })
    );
  });

  it("expectMutationToBeCalled function returns a message when the expected mutation is not called", () => {});

  it("expectMutationToBeCalled function returns a message when the expected variables are not returned", () => {});
});
