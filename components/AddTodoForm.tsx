import React, { FC, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

interface AddTodoFormProps {
  addTodo: (text: string) => void
}

export const AddTodoForm: FC<AddTodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>('');

  const handlePress = (): void => {
    if (value.trim()) {
      addTodo(value);
      setValue('');
    } else {
      Alert.alert('Task can`t be empty');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="add task..."
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>add todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20
  },
  input: {
    height: 40,
    width: 200,
    borderBottomWidth: 2,
    borderColor: '#336699'
  },
  button: {
    backgroundColor: '#336699',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  buttonText: {
    color: '#ffff'
  }
});
