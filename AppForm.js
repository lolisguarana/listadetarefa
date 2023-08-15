import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Database from './Database';

export default function AppForm({ route, navigation,props }) {
  const [tarefa, setTarefa] = useState('');  
  const [editMode, setEditMode] = useState(route?.params?.edit ?? false);  
  let id = route?.params && route?.params?.edit ? route.params.item.id : undefined;  
  useEffect(() => {
    if (!route.params) return;
    setTarefa(route.params.item.tarefa);
    setEditMode(route.params.edit);
  }, [route])

  function handleTarefaChange(tarefa) { 
    setTarefa(tarefa);
  }
  
  async function handleButtonPress(){ 
    const listItem = {tarefa};
    Database.saveItem(listItem, editMode ? id : undefined)
    .then(response => navigation.navigate("AppList", listItem));

    setTarefa("");    
    setEditMode(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefa</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={tarefa}
          onChangeText={handleTarefaChange}
          placeholder="Tarefa"
           />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#036FFC',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#036FFC',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});