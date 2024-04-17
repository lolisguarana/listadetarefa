import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import CadastroLogin from './CadastroLogin';

const Stack = createStackNavigator();

const AppAuth = () => (
  <NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerShown:false
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="CadastroLogin" component={CadastroLogin}/>
  </Stack.Navigator>
  </NavigationContainer>
);

export default AppAuth;