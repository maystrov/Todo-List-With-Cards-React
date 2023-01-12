import './App.scss';
import TodoCard from './components/TodoCard';
import items from './db/db';
import { Component } from 'react';
import CardForm from './components/CardForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
    };
  }

  addCard = (newCard) => {
    const newItems = [...this.state.items, newCard];
    this.setState({ items: newItems });
  };

  onCardUpdate = (id, arg) => {
    const searchedCard = this.state.items.find((item) => item.id === id);
    const key = Object.keys(arg);
    searchedCard[key] = arg[key];
    this.forceUpdate();
  };

  handleStatusChange = (e) => {
    this.props.onUpdate(this.props.id, { status: e.target.value });
  };

  deleteTodoHandler = (clickedId) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== clickedId),
    });
  };

  render() {
    console.log();
    return (
      <div>
        <CardForm addCard={this.addCard} />
        <div className="cards-section">
          {console.log('this.state.items: ', this.state.items)}
          {this.state.items.map((item) => (
            <TodoCard
              key={item.id}
              {...item}
              onUpdate={this.onCardUpdate}
              deleteTodo={this.deleteTodoHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
