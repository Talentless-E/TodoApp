import React, { useState, useEffect, createContext, useContext } from "react";
import { initialState } from "../utils/utils";
import { getRandomColor } from "../utils/utils";
import uuid from "react-uuid";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
   const [todoListId, setTodoListId] = useState();
   const [todoId, setTodoId] = useState();

   const [todos, setTodos] = useState(
      localStorage.getItem("todoStore")
         ? JSON.parse(localStorage.getItem("todoStore"))
         : initialState
   );

   useEffect(() => {
      localStorage.setItem("todoStore", JSON.stringify(todos));
   }, [todos]);

   const [newsFeedActive, setNewsFeedActive] = useState(true);
   const addTodo = (title, text) => {
      let newTodos = todos.map((todo) => {
         if (todoListId === todo.id) {
            return {
               ...todo,
               id: uuid(),
               data: [
                  ...todo.data,
                  {
                     id: uuid(),
                     title: title,
                     text: text,
                     completed: false,
                     color: getRandomColor(),
                  },
               ],
            };
         }
         return { ...todo };
      });
      setTodos(newTodos);
   };

   const editTodo = (title, text) => {
      const newTodos = todos.map((todo) => {
         todo.data.map((todoItem) => {
            if (todoItem.id === todoId) {
               todoItem.title = title;
               todoItem.text = text;
            }
            return todoItem;
         });
         return todo;
      });
      setTodos(newTodos);
   };

   const deleteTodo = () => {
      const newTodos = [...todos];
      newTodos.map((todo) => {
         todo.data = todo.data.filter((item) => item.id !== todoId);
         return { ...todo };
      });
      setTodos(newTodos);
   };

   const deleteTodoList = () => {
      const newTodos = todos.filter((todo) => todo.id !== todoListId);
      setTodos(newTodos);
   };

   const switchComplete = (id) => {
      const newTodos = [...todos];
      console.log("Switched");
      newTodos.map((todo) => {
         todo.data.map((item) => {
            if (item.id === id) {
               item.completed = !item.completed;
            }
            return item;
         });
         return todo;
      });
      setTodos(newTodos);
   };

   const addNewTodoList = (date) => {
      setTodos([
         ...todos,
         {
            id: uuid(),
            date: date,
            data: [],
         },
      ]);
   };
   const setCurrentTodoListDate = (listId) => {
      setTodoListId(listId);
   };
   const setActiveTodoId = (id) => {
      setTodoId(id);
   };
   const getTodoData = () => {
      const outputData = { title: "", text: "" };
      const newTodos = [...todos];
      newTodos.forEach((todo) => {
         todo.data.forEach((item) => {
            if (item.id === todoId) {
               outputData.title = item.title;
               outputData.text = item.text;
            }
         });
      });
      return outputData;
   };
   const contextValue = {
      todos,
      todoListId,
      todoId,
      addTodo,
      setTodos,
      switchComplete,
      editTodo,
      deleteTodo,
      deleteTodoList,
      addNewTodoList,
      setCurrentTodoListDate,
      setActiveTodoId,
      getTodoData,
      newsFeedActive,
      setNewsFeedActive,
   };
   return (
      <DataContext.Provider value={contextValue}>
         {children}
      </DataContext.Provider>
   );
};
export const useTodoContext = () => useContext(DataContext);
export default DataProvider;
