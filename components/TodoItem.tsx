import React, { FC } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { todoInterface } from './interfaces';

interface TodoItemProps {
  todo: todoInterface,
  removeTodo: (id: string) => void
}

export const TodoItem: FC<TodoItemProps> = ({ todo, removeTodo }) => {
  return (
    <View style={styles.container}>
      <Text>{todo.text}</Text>
      <Button title='X' onPress={() => removeTodo(todo.id)} />
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
  }
});
