import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn màu điện thoại</Text>
      <View style={styles.colorOptions}>
        <TouchableOpacity style={[styles.colorButton, { backgroundColor: 'blue' }]} onPress={() => navigation.navigate('Color', { color: 'blue' })} />
        <TouchableOpacity style={[styles.colorButton, { backgroundColor: 'red' }]} onPress={() => navigation.navigate('Color', { color: 'red' })} />
        <TouchableOpacity style={[styles.colorButton, { backgroundColor: 'teal' }]} onPress={() => navigation.navigate('Color', { color: 'teal' })} />
        <TouchableOpacity style={[styles.colorButton, { backgroundColor: 'white' }]} onPress={() => navigation.navigate('Color', { color: 'white' })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default HomeScreen;
