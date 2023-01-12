import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import './TodoItem.scss';
import Select from './Select';
import { PRIORITIES, STATUSES } from '../constants/constants';

class TodoCard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    titleEditMode: false,
    descEditMode: false,
    statusEditMode: false,
    priorityEditMode: false,
  };

  onTitleChange = (e) => {
    this.props.onUpdate(this.props.id, { title: e.target.value });
  };

  onDescChange = (e) => {
    this.props.onUpdate(this.props.id, { desc: e.target.value });
  };

  handleStatusChange = (e) => {
    this.props.onUpdate(this.props.id, { status: e.target.value });
  };
  handlePriorityChange = (e) => {
    this.props.onUpdate(this.props.id, { priority: e.target.value });
  };

  handleDeleteClick = () => {
    this.props.deleteTodo(this.props.id);
  };

  render() {
    const { titleEditMode, descEditMode, statusEditMode, priorityEditMode } =
      this.state;
    const { id, title, desc, status, priority } = this.props;

    return (
      <div className="todo-card">
        {!titleEditMode && (
          <h3 onClick={() => this.setState({ titleEditMode: true })}>
            {title}
          </h3>
        )}
        {titleEditMode && (
          <input
            type="text"
            value={title}
            onChange={this.onTitleChange}
            onBlur={() => this.setState({ titleEditMode: false })}
          />
        )}

        {!descEditMode && (
          <p onClick={() => this.setState({ descEditMode: true })}>{desc}</p>
        )}
        {descEditMode && (
          <textarea
            value={desc}
            onChange={this.onDescChange}
            onBlur={() => this.setState({ descEditMode: false })}
          />
        )}

        {!statusEditMode && (
          <p onClick={() => this.setState({ statusEditMode: true })}>
            Status: {STATUSES[status]}
          </p>
        )}
        {statusEditMode && (
          <Select
            name="statuses"
            selectKey={status}
            onSelectChange={this.handleStatusChange}
            onSelectBlur={() => this.setState({ statusEditMode: false })}
            selectItems={STATUSES}
          />
        )}

        {!priorityEditMode && (
          <p onClick={() => this.setState({ priorityEditMode: true })}>
            Priority: {PRIORITIES[priority]}
          </p>
        )}
        {priorityEditMode && (
          <Select
            name="priorities"
            selectKey={priority}
            onSelectChange={this.handlePriorityChange}
            onSelectBlur={() => this.setState({ priorityEditMode: false })}
            selectItems={PRIORITIES}
          />
        )}

        <button type="button" onClick={this.handleDeleteClick}>
          Delete
        </button>
      </div>
    );
  }
}

export default TodoCard;
