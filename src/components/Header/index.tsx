import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface HeaderProps {
  tasksCounter: number;
}

export function Header({tasksCounter}: Readonly<HeaderProps>) {
  const tasksCounterText = tasksCounter === 1 ? 'tarefa' : 'tarefas';

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>To.Do Orange</Text>

      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Você tem </Text>
        <Text style={styles.tasksCounterBold}>
          {tasksCounter} {tasksCounterText}
        </Text>
      </View>
    </View>
  );
}
