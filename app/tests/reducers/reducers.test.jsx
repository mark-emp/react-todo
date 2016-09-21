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
        text: 'A new todo'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
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
    it('should toggle todo', () => {
      var todos = [
        {
          id: 7,
          text: 'A dummy todo',
          completed: true,
          createdAt: 4,
          completedAt: 10
        }
      ];
      var action = {
        type: 'TOGGLE_TODO',
        id: 7
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});
