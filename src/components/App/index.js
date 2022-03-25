import React from 'react';
import {Provider} from 'mobx-react';
import TaskListStore from 'stores/TaskList'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.TaskListStore = new TaskListStore();
  }

  componentWillUnmount() {
    this.TaskListStore.unmount?.();
  }

  render() {
    return (
      <Provider TaskListStore={this.TaskListStore}>
        Some components
      </Provider>
    );
  }
}

export default App;
