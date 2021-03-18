import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>ToDo app</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66ffff',
    paddingVertical: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#336699',
  },
});

export default Header;
