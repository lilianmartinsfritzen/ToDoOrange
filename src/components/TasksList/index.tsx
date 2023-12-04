import React from 'react';
import {FlatList} from 'react-native';

import {TaskContainer} from '../TaskContainer';
import {TaskItem} from '../TaskItem';
import {EditTaskProps} from '../../screens/Home';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({taskId, taskNewTitle}: EditTaskProps) => void;
}

export function TasksList({
  tasks,
  toggleTaskDone,
  removeTask,
  editTask,
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{paddingBottom: 24}}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <TaskContainer index={index}>
            <TaskItem
              task={item}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}
              editTask={editTask}
            />
          </TaskContainer>
        );
      }}
      style={{
        marginTop: 32,
      }}
    />
  );
}
