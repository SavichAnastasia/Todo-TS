import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoItem } from './components/TodoItem';
import { Header } from './components/Header';
import { todoInterface } from './components/interfaces';

export default function App () {
  const [todos, setTodos] = useState<todoInterface[]>([]);

  const addTodo = (text: string): void => {
    const newTodo: todoInterface = {
      id: Date.now().toString(),
      text
    };
    setTodos((prev: Array<todoInterface>) => [...prev, newTodo]);
  };

  const removeTodo = (id: string): void => {
    setTodos((prev) => prev.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddTodoForm addTodo={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={todo => todo.id}
        renderItem={({ item }) => <TodoItem removeTodo={removeTodo} todo={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
