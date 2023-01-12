import React, { Component } from 'react';
import { STATUSES, PRIORITIES } from '../constants/constants';

class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, selectKey, onSelectChange, onSelectBlur, selectItems } =
      this.props;
    return (
      <div>
        <select
          name={name}
          value={selectKey}
          onChange={onSelectChange}
          onBlur={onSelectBlur}
        >
          {Object.entries(selectItems).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
