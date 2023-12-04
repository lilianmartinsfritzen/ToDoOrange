import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({addTask}: Readonly<TodoInputProps>) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (task !== '') {
      addTask(task);
    }
    setTask('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar novo ToDo..."
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={() => handleAddNewTask()}>
        <Icon name="chevron-right" size={24} color="#B2B2B2" />
      </TouchableOpacity>
    </View>
  );
}
