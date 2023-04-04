import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray;
`;

function TodoList() {
  return (
    <>
      <TodoListBlock>
        <TodoItem text="JSX 공부하기" done={true} />
        <TodoItem text="styled-comoponents 공부하기" done={true} />
        <TodoItem text="Context 만들기" done={false} />
        <TodoItem text="기능 구현" done={false} />
      </TodoListBlock>
    </>
  )
}

export default TodoList;