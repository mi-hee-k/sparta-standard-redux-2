import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, switchTodo } from '../redux/modules/todo';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './UI/Button';

const TodoItem = ({ todo, inputs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 수정
  const switchHandler = (id) => {
    dispatch(switchTodo(id));
  };

  // 삭제
  const deleteHandler = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteTodo(id));
    }
    return;
  };

  // 상세페이지로 이동
  const moveToDetail = (id) => {
    if (inputs.title || inputs.contents) {
      if (inputs.title.length > 0 || inputs.content.length > 0) {
        if (
          window.confirm(
            '작성중인 내용이 있습니다. 화면을 이동하시면 사라집니다. 계속하시겠습니까?'
          )
        ) {
          navigate(`/detail/${id}`);
        }
        return;
      }
    }

    navigate(`/detail/${id}`);
  };
  return (
    <ScTodoItemWrapper>
      <h3>{todo.title}</h3>
      <p>{todo.contents}</p>
      <div>
        <Button onClick={() => switchHandler(todo.id)} bgColor='#FF7878'>
          완료
        </Button>
        <Button onClick={() => deleteHandler(todo.id)}>삭제</Button>
      </div>
      <Button onClick={() => moveToDetail(todo.id)} bgColor='#4f7e03'>
        상세페이지 가기
      </Button>
    </ScTodoItemWrapper>
  );
};

const ScTodoItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #353535;

  h3 {
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    font-size: 1.1rem;
    margin-bottom: 10px;
    background-color: #fcd6d6;
  }

  p {
    margin-bottom: 10px;
  }

  div {
    margin-bottom: 10px;
  }

  div button:first-child {
    margin-right: 10px;
  }
`;
export default TodoItem;
