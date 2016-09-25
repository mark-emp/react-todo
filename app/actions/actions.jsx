import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
}

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
}

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
}

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);
    console.log('Stage 1');
    todoRef.then(() => {
      console.log('Stage 2');
      dispatch(addTodo({
        text: todo.text,
        completed: todo.completed,
        createdAt: todo.createdAt,
        id: todoRef.key
      }));
    }, (e) => {
      console.log('Stage 3: ', e);
    });
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
}

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}
