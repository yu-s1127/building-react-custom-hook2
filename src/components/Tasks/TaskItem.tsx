import React, { FC } from 'react';

import classes from './TaskItem.module.css';

const TaskItem: FC = (props) => {
  return <li className={classes.task}>{props.children}</li>;
};

export default TaskItem;
