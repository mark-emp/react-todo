var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;
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
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
