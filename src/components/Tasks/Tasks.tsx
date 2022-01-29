import React, { FC } from 'react';
import Task from '../types/Task';

import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

interface Props {
  items: Array<Task>;
  error: string | null;
  loading: boolean;
  onFetch: () => void;
}

const Tasks: FC<Props> = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content: JSX.Element | string = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading tasks...';
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
