import React, { FC, useState } from 'react';
import Task from '../types/Task';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

interface Props {
  onAddTask: (task: Task) => void;
}

const NewTask: FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const enteredTaskHandler = async (taskText: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ test: taskText }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name;
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (error) {
      setError('Something went wrong');
    }
  };

  return (
    <Section>
      <TaskForm onEnterTask={enteredTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
