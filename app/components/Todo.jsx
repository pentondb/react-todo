var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var { id, text, completed, createdAt, completedAt } = this.props;
        var renderDate = () => {
            var message = !completed ? 'Created ' : 'Completed ';
            var timestamp = !completed ? createdAt : completedAt;

            return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
        };

        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed} />
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;