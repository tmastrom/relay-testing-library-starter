import React from 'react';
import '../App.css';
import {graphql} from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import type {TodoListItem_todo$key} from './__generated__/TodoListItem_todo.graphql';
import Checkbox from '@button-inc/component-library/Checkbox'

type Props = {
    //$key includes data and fragment reference
    todo: TodoListItem_todo$key
}

function TodoListItem(props: Props) {
    const data = useFragment(
        graphql`
          fragment TodoListItem_todo on Todo {
            id
            task
            completed
          }
        `,
        props.todo,
      );
      return (
          <Checkbox className={"checkbox"} label={data.task} defaultChecked={data.completed}/>
          //brianna--add onchange
      )
      

}

export default TodoListItem;