import {makeObservable} from 'mobx';

class TaskList {
  constructor() {
    makeObservable(this);
  }
}

export default TaskList;
