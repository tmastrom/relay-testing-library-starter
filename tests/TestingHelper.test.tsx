import TestingHelper from "../src/TestingHelper";
import { commitMutation, graphql } from "react-relay";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import ReactTestRenderer from "react-test-renderer";

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

  it("expectMutationToBeCalled function returns a message when the expected mutation is not called", () => {
    const testingHelper = new TestingHelper();

    // brianna--how to set this up?
    const mutation = graphql`
      mutation addEmissionIntensityReportToRevisionMutation(
        $input: AddEmissionIntensityReportToRevisionInput!
      ) {
        addEmissionIntensityReportToRevision(input: $input) {
          formChanges {
            id
            rowId
            asEmissionIntensityReport {
              calculatedEiPerformance
            }
            newFormData
            projectRevisionByProjectRevisionId {
              ...TaskList_projectRevision
              ...ProjectEmissionIntensityReportForm_projectRevision
            }
          }
        }
      }
    `;

    function sendMutation(environment, onCompleted, onError, variables) {
      commitMutation(environment, {
        mutation: mutation,
        onCompleted,
        onError,
        variables,
      });
    }

    const environment = createMockEnvironment();
    const onCompleted = jest.fn();
    sendMutation(environment, onCompleted, jest.fn(), {});
    // const operation = environment.mock.getMostRecentOperation();
    // const operationName =
    //   environment.mock.getMostRecentOperation().fragment.node.name;

    // brianna--best way to test this is to compare the strings?
    const expected =
      `Expected mutation testMutation to be called. Mutations called:\n` +
      `addEmissionIntensityReportToRevisionMutation`;

    const result = testingHelper.expectMutationToBeCalled("testMutation", {}); // brianna--does this actually return the error or do we access it another way

    expect(result).toEqual(expected);

    // resolve the mutation--I don't think this matters for the helper
    // ReactTestRenderer.act(() => {
    //   environment.mock.resolve(
    //     operation,
    //     MockPayloadGenerator.generate(operation)
    //   );
    // });

    // expect(onCompleted).toBeCalled();
  });

  it("expectMutationToBeCalled function returns a message when the expected variables are not returned", () => {});
});
