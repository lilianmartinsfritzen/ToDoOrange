import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {styles} from './styles';

export function Home() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.tasksCounter}>to.do</Text>

        <View style={styles.tasks}>
          <Text style={styles.tasksCounter}>Você tem </Text>
          <Text style={styles.tasksCounterBold}>04 tarefas</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
