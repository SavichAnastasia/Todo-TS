import React, { FC, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { todoInterface } from './interfaces';

interface TodoItemProps {
  todo: todoInterface,
  removeTodo: (id: string) => void,
  editTodo: (id: string, text: string) => void
}

export const TodoItem: FC<TodoItemProps> = ({ todo, removeTodo, editTodo }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleEditTodo = () => {
    setIsEditMode(false);
    editTodo(todo.id, value);
  }

  useEffect(() => {
    setValue(todo.text);
  }, [ todo ])

  return (
    <View style={styles.container}>
      { isEditMode ? 
        <TextInput value={value} onChangeText={setValue} autoFocus onEndEditing={handleEditTodo} />
        : <Text>{todo.text}</Text> }
      <View style={styles.btnsContainer}>
        <Button title='i' onPress={() => setIsEditMode(true)} />
        <Button title='X' onPress={() => removeTodo(todo.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#66ffff',
    width: 200,
    padding: 5
  },
  btnsContainer: {
    flexDirection: 'row'
  }
});
