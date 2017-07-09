import {
  TODO_FIELD_CHANGED,
  TODO_ADD,
  TODO_ADD_SUCCESS,
  TODO_ADD_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  todoText: "",
  loading: false,
  error: "",
  todos: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_FIELD_CHANGED:
      return { ...state, todoText: action.payload };
    case TODO_ADD: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    default: {
      return state;
    }
  }
};
