import moment from "moment";

import firebase, { firebaseRef } from "app/firebase/";

export var setSearchText = searchText => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText
  };
};

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED"
  };
};

export var addTodo = todo => {
  return {
    type: "ADD_TODO",
    todo
  };
};

export var startAddTodo = text => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    var todoRef = firebaseRef.child("todos").push(todo);
    // console.log("todoRef.key is: ", todoRef.key);
    return todoRef.then(() => {
      dispatch(
        addTodo({
          ...todo,
          id: todoRef.key
        })
      );
    });
  };
};

export var addTodos = todos => {
  return {
    type: "ADD_TODOS",
    todos
  };
};

// toggleTodo(id) TOGGLE_TODO
export var toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};
