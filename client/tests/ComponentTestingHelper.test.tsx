import React from "react";
import ComponentTestingHelper from "./ComponentTestingHelper";
import { graphql } from "react-relay";
import compiledTodoListItemQuery, {
  TodoListItemQuery,
} from "./__generated__/TodoListQuery.graphql";
import TodoList from "../src/components/TodoListItem";
import { act, screen, render } from "@testing-library/react";

const testQuery = graphql`
  query TodoListItemTestQuery @relay_test_operation {
    query {
      # Spread the fragment you want to test here
      ...TodoListItem_todo
    }
  }
`;

// This needs to match what we queried in our test query
const mockQueryPayload = {
  TodoListItemTestQuery() {
    const result: any = {
      id: "Test ID",
      rowId: 1234,
    };
    return result;
  },
};

const defaultComponentProps = {
  onSubmit: jest.fn(),
};

describe("TestingHelper", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("initializes the component testing helper", () => {
    const componentTestingHelper = new ComponentTestingHelper<TodoListQuery>({
      component: TodoList,
      testQuery: testQuery,
      compiledQuery: compiledTodoListQuery,
      getPropsFromTestQuery: (data) => ({
        query: data,
      }),
      defaultQueryResolver: mockQueryPayload,
      defaultQueryVariables: {},
      defaultComponentProps: defaultComponentProps,
    });
    expect(componentTestingHelper.environment).toEqual(expect.anything());
    expect(componentTestingHelper.expectMutationToBeCalled).toBeInstanceOf(
      Function
    );
    expect(componentTestingHelper.reinit).toEqual(expect.any(Function));
    expect(componentTestingHelper.loadQuery).toEqual(expect.any(Function));
    expect(componentTestingHelper.rerenderComponent).toEqual(
      expect.any(Function)
    );
  });

  it("loads the query", () => {
    const componentTestingHelper = new ComponentTestingHelper<TodoListQuery>({
      component: TodoList,
      testQuery: testQuery,
      compiledQuery: compiledTodoListQuery,
      defaultQueryResolver: mockQueryPayload,
      defaultQueryVariables: {},
      defaultComponentProps: defaultComponentProps,
    });
    componentTestingHelper.loadQuery();
    console.log(
      "componentTestingHelper.loadQuery();",
      componentTestingHelper.loadQuery()
    );
  });

  it.only("renders the component", () => {
    const componentTestingHelper = new ComponentTestingHelper<TodoListQuery>({
      component: TodoList,
      testQuery: testQuery,
      compiledQuery: compiledTodoListQuery,
      getPropsFromTestQuery: (data) => ({
        query: data,
      }),
      defaultQueryResolver: mockQueryPayload,
      defaultQueryVariables: {},
      defaultComponentProps: defaultComponentProps,
    });
    componentTestingHelper.reinit();
    componentTestingHelper.loadQuery();
    componentTestingHelper.renderComponent();
    expect(screen.getByText("Todo")).toBeInTheDocument();
  });
});
