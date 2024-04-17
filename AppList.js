import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,FlatList,Alert } from 'react-native';
import AppItem from './Componente';
import {Logout} from './Database';
import { db,collection,getDocs,auth,where } from './config';
import { Edit, Trash } from 'react-native-feather';
import { ScrollView } from 'react-native-gesture-handler';
import { query } from 'firebase/firestore';
export default function AppList({ route, navigation }) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        handleButtonPress();      
    }, []);
    async function handleButtonPress(){
        const user = auth.currentUser;
    if (!user) {
      console.error('Nenhum usuário autenticado.');
      return;
    } 
    const taskRef = collection(db, "tarefa");
const userTaskQuery = query (taskRef,where('userId', '==',user.uid));
    const querySnapshot = await getDocs(userTaskQuery);
const tarefa = querySnapshot.docs.map((doc) => ({id:doc.id,
    ...doc.data()}) 
      );
setItems(tarefa);
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems:'center',
    justifyContent: 'space-between', backgroundColor:'white',
    elevation:4,paddingHorizontal:20 ,width:'100%'}}>
        <Text style={{fontSize:20,padding:20}}   >Lista</Text>
        <Text style={{fontSize:20,padding:20,color:'red'}} onPress={Logout}>Logout</Text>
      <Text style={{fontSize:20,padding:20,color:'blue'}} onPress={()=>{navigation.navigate('Cadastro',{ButtonPress:handleButtonPress})}}>Adicionar</Text>
    </View>
            <StatusBar style="light" />
            <Text style={styles.title}>Lista de Tarefas</Text>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.itemsContainer}
                >
                {items.map(item => {
                    return <AppItem key={item.id} id={item.id} item={item.tarefa} navigation={navigation} ButtonPress={handleButtonPress} />
                })}
            </ScrollView>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#036FFC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    },
    scrollContainer: {
        flex: 1,
        width: '90%'
    },
    itemsContainer: {
        marginTop: 10,
        padding: 20,
        borderRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
});