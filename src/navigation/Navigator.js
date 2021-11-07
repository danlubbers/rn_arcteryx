import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import HomeScreen from '../screens/homescreen/homescreen';
import Products from '../screens/products/products';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalContext} from '../context/Provider';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {initialState} = useContext(GlobalContext);
  const screenCategory = initialState.globalState.category;

  return (
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
          options={{
            title: screenCategory,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
