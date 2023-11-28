import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todo';
import shortId from 'shortid';
import AddForm from '../components/AddForm';
import TodoList from '../components/TodoList';
import styled from 'styled-components';

const Home = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    title: '',
    contents: '',
  });

  // input 변경
  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // 등록
  const addHandler = (e) => {
    e.preventDefault();

    if (
      inputs.title.trim().length === 0 ||
      inputs.contents.trim().length === 0
    ) {
      alert('내용을 입력해주세요');
      return;
    }

    const newTodo = {
      id: shortId.generate(),
      title: inputs.title,
      contents: inputs.contents,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setInputs({
      title: '',
      contents: '',
    });
  };

  return (
    <ScWrapper>
      <h1>TodoList</h1>
      <AddForm
        addHandler={addHandler}
        inputs={inputs}
        changeHandler={changeHandler}
      />

      <TodoList isDone={false} inputs={inputs} />
      <TodoList isDone={true} inputs={inputs} />
    </ScWrapper>
  );
};

const ScWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export default Home;
