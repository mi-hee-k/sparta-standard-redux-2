import React from 'react';
import styled from 'styled-components';
import Button from './UI/Button';

const AddForm = ({ addHandler, inputs, changeHandler }) => {
  return (
    <ScFormWrapper onSubmit={addHandler}>
      <div>
        <label htmlFor='title'>제목</label>
        <input
          type='text'
          id='title'
          placeholder='할 일을 입력하세요'
          name='title'
          value={inputs.title}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor='contents'>내용</label>
        <input
          type='text'
          id='contents'
          placeholder='내용을 입력하세요'
          name='contents'
          value={inputs.contents}
          onChange={changeHandler}
        />
      </div>
      <Button bgColor='#FF7878'>등록</Button>
    </ScFormWrapper>
  );
};

const ScFormWrapper = styled.form`
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;

  div {
    margin-bottom: 10px;
  }

  label {
    margin-right: 10px;
  }

  input {
    border-radius: 10px;
  }
`;

export default AddForm;
