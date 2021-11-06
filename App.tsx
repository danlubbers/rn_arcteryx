import 'react-native-gesture-handler';
import React from 'react';
import GlobalProvider from './src/context/Provider';
import HomeScreen from './src/screens/homescreen/homescreen';
import Products from './src/screens/products/products';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Products"
            component={Products}
            // options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
