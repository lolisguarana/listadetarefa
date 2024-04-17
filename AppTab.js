import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppList from './AppList';
import AppForm from './AppForm';
import AppEdit from './AppEdit';


const Stack = createStackNavigator();

function AppTab() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                }}
            >
                <Stack.Screen name="Lista" component={AppList}
                />
                <Stack.Screen name="Cadastro" component={AppForm}
                />      
                <Stack.Screen name='Editar' component={AppEdit}/>         
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppTab;
