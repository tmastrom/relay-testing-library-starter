import TestingHelper from "./TestingHelper";
import { commitMutation } from "react-relay";
import CreateTodoMutation from "../components/__generated__/CreateTodoMutation.graphql";

describe("TestingHelper", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("reinit function creates an environment, errorContext, and mock router", () => {
    const testingHelper = new TestingHelper();
    testingHelper.reinit();
    expect(testingHelper.environment).toEqual(expect.anything());
    expect(testingHelper.expectMutationToBeCalled).toEqual(
      expect.any(Function)
    );
    expect(testingHelper.reinit).toEqual(expect.any(Function));
  });

  it("expectMutationToBeCalled function returns a message when the expected mutation is not called", () => {
    const testingHelper = new TestingHelper();
    testingHelper.reinit();

    commitMutation(testingHelper.environment, {
      mutation: CreateTodoMutation,
      variables: {},
    });

    expect(() => {
      testingHelper.expectMutationToBeCalled("testMutation", {});
    }).toThrow(
      `Expected mutation testMutation to be called. Mutations called:\n` +
        `CreateTodoMutation`
    );
  });

  it("expectMutationToBeCalled function returns a message when the expected variables are not returned", () => {
    const testingHelper = new TestingHelper();
    testingHelper.reinit();
    const variables = commitMutation(testingHelper.environment, {
      mutation: CreateTodoMutation,
      variables: { connections: "test", input: "test" },
    });

    expect(() => {
      testingHelper.expectMutationToBeCalled("CreateTodoMutation", {
        test: "iwillfail",
      });
    }).toThrow(
      `Expected mutation CreateTodoMutation to be called with:` +
        `
{
  "test": "iwillfail"
}` +
        `
received:
` +
        `{
  "connections": "test",
  "input": "test"
}`
    );
  });
});
