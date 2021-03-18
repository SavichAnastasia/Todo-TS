import React, { FC, useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, TextInput,
} from 'react-native';
import EditIcon from './EditIcon';
import RemoveIcon from './RemoveIcon';
import { todoInterface } from './interfaces';

interface TodoItemProps {
  todo: todoInterface,
  removeTodo: (id: string) => void,
  editTodo: (id: string, text: string) => void
}

const TodoItem: FC<TodoItemProps> = ({ todo, removeTodo, editTodo }: TodoItemProps) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    setValue(todo.text);
  }, [todo]);

  const handleEditTodo = (): void => {
    setIsEditMode(false);
    editTodo(todo.id, value);
  };

  const handleTaskIsDone = ():void => {
    setIsDone((prev) => !prev);
  };

  return (
    <TouchableOpacity style={styles.container} onLongPress={handleTaskIsDone}>
      { isEditMode
        ? <TextInput value={value} onChangeText={setValue} autoFocus onEndEditing={handleEditTodo} />
        : <Text style={isDone && { textDecorationLine: 'line-through' }}>{todo.text}</Text> }
      <View style={styles.btnsContainer}>
        <TouchableOpacity onPress={() => setIsEditMode(true)}>
          <EditIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeTodo(todo.id)}>
          <RemoveIcon />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    width: 250,
    padding: 5,
  },
  btnsContainer: {
    flexDirection: 'row',
  },
});

export default TodoItem;
