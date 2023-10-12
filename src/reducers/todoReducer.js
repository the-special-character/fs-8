export const initTodoState = {
  todoList: [],
  filterType: 'all',
  isLoading: false,
  hasError: false,
};

export const TodoReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_TODO_REQUEST':
    case 'ADD_TODO_REQUEST':
    case 'UPDATE_TODO_REQUEST':
    case 'DELETE_TODO_REQUEST':
      return { ...state, isLoading: true };

    case 'LOAD_TODO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        todoList: payload,
      };

    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        todoList: [...state.todoList, payload],
      };

    case 'UPDATE_TODO_SUCCESS': {
      const index = state.todoList.findIndex(
        x => x.id === payload.id,
      );
      return {
        ...state,
        isLoading: false,
        todoList: [
          ...state.todoList.slice(0, index),
          payload,
          ...state.todoList.slice(index + 1),
        ],
      };
    }

    case 'DELETE_TODO_SUCCESS': {
      const index = state.todoList.findIndex(
        x => x.id === payload.id,
      );
      return {
        ...state,
        isLoading: false,
        todoList: [
          ...state.todoList.slice(0, index),
          ...state.todoList.slice(index + 1),
        ],
      };
    }

    case 'LOAD_TODO_FAIL':
    case 'ADD_TODO_FAIL':
    case 'UPDATE_TODO_FAIL':
    case 'DELETE_TODO_FAIL':
      return {
        ...state,
        isLoading: false,
        hasError: !!payload,
      };

    default:
      return state;
  }
};
