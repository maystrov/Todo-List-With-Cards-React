import './CardForm.scss';

import React, { Component } from 'react';
import Select from './Select';
import { PRIORITIES, STATUSES } from '../constants/constants';

class CardForm extends Component {
  state = {
    id: 0,
    title: '',
    desc: '',
    status: 'TODO',
    priority: 'LOW',
  };

  onTitleChange = (e) => this.setState({ title: e.target.value });
  onDescChange = (e) => this.setState({ desc: e.target.value });
  onStatusChange = (e) => this.setState({ status: e.target.value });
  onPriorityChange = (e) => this.setState({ priority: e.target.value });

  onButtonClick = () => {
    const { title, desc, status, priority, id } = this.state;
    const newCard = {
      id: Date.now(),
      title,
      desc,
      status,
      priority,
    };
    this.props.addCard(newCard);
    this.setState({
      title: '',
      desc: '',
      status: 'TODO',
      priority: 'LOW',
    });
  };

  render() {
    const { title, desc, status, priority } = this.state;
    return (
      <div className="card-form">
        <form>
          <div>
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.onTitleChange}
            />
          </div>
          <div>
            Description:
            <textarea name="desc" value={desc} onChange={this.onDescChange} />
          </div>
          <div>
            Status:
            <Select
              name="status"
              selectItems={STATUSES}
              selectKey={status}
              onSelectChange={this.onStatusChange}
            />
          </div>
          <div>
            Priority:
            <Select
              name="priority"
              selectItems={PRIORITIES}
              selectKey={priority}
              onSelectChange={this.onPriorityChange}
            />
          </div>
          <button type="button" onClick={this.onButtonClick}>
            ADD TASK
          </button>
        </form>
      </div>
    );
  }
}

export default CardForm;
