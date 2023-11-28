import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTodo } from '../redux/modules/todo';
import styled from 'styled-components';
import Button from '../components/UI/Button';

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const currentTodo = todos.filter((todo) => todo.id === id);

  // 삭제
  const deleteHandler = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteTodo(id));
      navigate('/');
    }
    return;
  };

  const moveToHome = () => {
    navigate('/');
  };
  return (
    <ScWrapper>
      {currentTodo.map((todo) => (
        <ScDetailWraaper key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.contents}</p>
          <p>상태 : {todo.isDone ? '완료' : '미완'}</p>
          <div>
            <Button onClick={moveToHome} bgColor='#FF7878'>
              이전화면으로
            </Button>
            <Button onClick={deleteHandler}>삭제</Button>
          </div>
        </ScDetailWraaper>
      ))}
    </ScWrapper>
  );
};

const ScWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
`;

const ScDetailWraaper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
  }

  div button:first-child {
    margin-right: 10px;
  }
`;

export default Detail;
