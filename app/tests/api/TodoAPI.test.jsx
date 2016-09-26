var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filter todos', () => {
    var todos = [{
      id: 1,
      text: 'Some text here',
      completed: true
    },{
      id: 2,
      text: 'Other text here',
      completed: false
    },{
      id: 3,
      text: 'Some text here',
      completed: true
    }];

    it('should return all items when showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(todos.length);
    });

    it('should return non-completed todos when showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all todos when search text is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });

    it('should filter todos by search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'other');
      expect(filteredTodos.length).toBe(1);
    });

  });
})
