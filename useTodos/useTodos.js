import { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

const init = () => {
return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
    const handleNewTodo = (todo) => {
        const action = {
          type: "add",
          payload: todo,
        };
        dispatch(action);
      };
      const handleDeleteTodo = (id) => {
        const action = {
          type: "remove",
          payload: id,
        };
        dispatch(action);
      };   
      const handleToggleTodo = (id) => {
        const action = {
          type: "toggle",
          payload: id,
        };
        dispatch(action);
      }; 
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount:todos.filter((todo) => !todo.done).length
    }
}

