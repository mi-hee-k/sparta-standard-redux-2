import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoList = ({ isDone, inputs }) => {
  const todos = useSelector((state) => state.todos);
  return (
    <ScTodoWrapper>
      <h2>{isDone ? '완료' : '진행중'}</h2>
      <ul>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} inputs={inputs} />
          ))}
      </ul>
    </ScTodoWrapper>
  );
};

const ScTodoWrapper = styled.div`
  padding: 30px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #fff;

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export default TodoList;
