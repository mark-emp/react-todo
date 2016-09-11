var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      if ( completed ) {
        var message = 'Completed ';
        var timestamp = completedAt;
      } else {
        var message = 'Created ';
        var timestamp = createdAt;
      }

      return message + moment.unix(timestamp).format('Do MMM YYY @ h:mm A');
    };
    return (
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <div>
          <p>{text}</p>
          <p className='todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    )
  }
});

module.exports = Todo;
