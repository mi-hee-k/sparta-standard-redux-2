const initialState = [
  {
    id: '아이디1',
    title: '제목1',
    contents: '내용1',
    isDone: false,
  },
  {
    id: '아이디2',
    title: '제목2',
    contents: '내용2',
    isDone: true,
  },
];

const ADD_TODO = 'ADD_TODO';
const SWITCH_TODO = 'SWITCH_TODO';
const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case SWITCH_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todos;
