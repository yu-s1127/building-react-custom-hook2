import React, { FC, FormEvent, useRef } from 'react';

import classes from './TaskForm.module.css';

interface Props {
  onEnterTask: (taskText: string) => void;
  loading: boolean;
}

const TaskForm: FC<Props> = (props) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredValue = taskInputRef?.current?.value;

    if (enteredValue && enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
