// import {makeObservable} from 'mobx';

class TaskList {
  constructor() {
    // makeObservable(this);
  }

  unmount = () => {
    console.log('unmount');
  };
}

export default TaskList;
