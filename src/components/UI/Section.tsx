import React, { FC } from 'react';

import classes from './Section.module.css';
const Section: FC = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
