var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchText', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
    it('should change the show completed status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });
  describe('todosReducer', () => {
    beforeEach(() => {
      localStorage.removeItem('todos');
    });
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: {
          id: '123',
          text: 'Something',
          completed: false,
          createdAt: 1234
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });
    it('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'Anything',
        completed: false,
        completedAt: undefined,
        createdAt: 12345
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
    it('should update todo', () => {
      var todos = [
        {
          id: 7,
          text: 'A dummy todo',
          completed: true,
          createdAt: 4,
          completedAt: 10
        }
      ];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
  });
  describe('authReducer', () => {
    it('should update auth with uid on login', () => {
      var auth = {};
      var uid = 'abc123';
      var action = {
        type: 'LOGIN',
        uid
      };
      var res = reducers.authReducer(df(auth), df(action));
      expect(res.uid).toEqual(uid);
    });
    it('should clear uid in auth on logout', () => {
      var uid = 'abc123';
      var auth = {uid};
      var action = {
        type: 'LOGOUT'
      };
      var res = reducers.authReducer(df(auth), df(action));
      expect(res.uid).toNotExist();
    })
  });
});
