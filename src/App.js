import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  state = {}
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6 card">
          <div className="card-body">
            <TodoList />
          </div>

        </div>
      </div>

    );
  }
}

export default App;