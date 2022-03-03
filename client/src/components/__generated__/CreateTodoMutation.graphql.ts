/**
 * @generated SignedSource<<d96edfb4451cb57fcfc632c58697bcf1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateTodoInput = {
  clientMutationId?: string | null;
  todo: TodoInput;
};
export type TodoInput = {
  completed?: boolean | null;
  dateCreated?: any | null;
  dateUpdated?: any | null;
  task: string;
};
export type CreateTodoMutation$variables = {
  input: CreateTodoInput;
};
export type CreateTodoMutation$data = {
  readonly createTodo: {
    readonly todo: {
      readonly id: string;
      readonly task: string;
    } | null;
  } | null;
};
export type CreateTodoMutation = {
  variables: CreateTodoMutation$variables;
  response: CreateTodoMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateTodoPayload",
    "kind": "LinkedField",
    "name": "createTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "task",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9d35d6ad6a34306d4750c43260f34f74",
    "id": null,
    "metadata": {},
    "name": "CreateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTodoMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    todo {\n      id\n      task\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9351cfd4fab8fa75078841524f62ed73";

export default node;
