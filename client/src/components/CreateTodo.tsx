import React from "react";
import "../App.css";
import {commitMutation} from 'react-relay';
import { graphql } from "babel-plugin-relay/macro";
import Button from "@button-inc/component-library/Button";
import Input from "@button-inc/component-library/Input";
import RelayEnvironment from "../RelayEnvironment";


const CreateTodoMutation = graphql`
mutation CreateTodoMutation ($input: CreateTodoInput!) {
  createTodo(input: $input) { 
      todo {
        id
        task
      }
    }
}
`;

function CreateTodo(props) {

  const submit = e => {
    //@ts-ignore
    const input = document.getElementById("newTodo").value

    commitMutation(RelayEnvironment, {
      mutation: CreateTodoMutation,
      variables: {input: {
        todo: {
          task: input
        }
      }},
      onCompleted: response => {
        console.log('completed, response is:',response)
      } /* Mutation completed */,
      onError: error => {
        console.log('error is:',error)
      } /* Mutation errored */,
    });
    

  }

  return (
    <div className="add">
      <Input className="add" id={"newTodo"}/>
      <Button className="add" onClick={submit}>Add</Button>
    </div>
  );
}

export default CreateTodo;
