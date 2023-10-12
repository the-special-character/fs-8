import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import {
  TodoReducer,
  initTodoState,
} from '../reducers/todoReducer';

export const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(
    TodoReducer,
    initTodoState,
  );

  const loadTodo = useCallback(async () => {
    try {
      //   setIsLoading(true);
      dispatch({ type: 'LOAD_TODO_REQUEST' });
      const res = await fetch(
        'http://localhost:3004/todoList',
      );
      const json = await res.json();
      dispatch({
        type: 'LOAD_TODO_SUCCESS',
        payload: json,
      });
    } catch (error) {
      dispatch({ type: 'LOAD_TODO_FAIL', payload: error });
    }
  }, []);

  const addTodo = useCallback(async data => {
    try {
      dispatch({ type: 'ADD_TODO_REQUEST' });
      const res = await fetch(
        'http://localhost:3004/todoList',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        },
      );
      const json = await res.json();
      dispatch({ type: 'ADD_TODO_SUCCESS', payload: json });
    } catch (error) {
      dispatch({ type: 'ADD_TODO_FAIL', payload: error });
    }
  }, []);

  const updateTodo = useCallback(async data => {
    try {
      dispatch({ type: 'UPDATE_TODO_REQUEST' });
      const res = await fetch(
        `http://localhost:3004/todoList/${data.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        },
      );
      const json = await res.json();
      dispatch({
        type: 'UPDATE_TODO_SUCCESS',
        payload: json,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_TODO_FAIL',
        payload: error,
      });
    }
  }, []);

  const deleteTodo = useCallback(async data => {
    try {
      dispatch({ type: 'DELETE_TODO_REQUEST' });
      await fetch(
        `http://localhost:3004/todoList/${data.id}`,
        {
          method: 'DELETE',
        },
      );
      dispatch({
        type: 'DELETE_TODO_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'DELETE_TODO_FAIL',
        payload: error,
      });
    }
  }, []);

  useEffect(() => {
    loadTodo();
  }, [loadTodo]);

  const value = useMemo(
    () => ({
      ...state,
      loadTodo,
      addTodo,
      updateTodo,
      deleteTodo,
    }),
    [state, loadTodo, addTodo, updateTodo, deleteTodo],
  );

  console.log(value);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodo = () => useContext(TodoContext)
