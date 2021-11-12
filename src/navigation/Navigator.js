import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import HomeScreen from '../screens/homescreen/homescreen';
import Product from '../screens/product/product';
import Products from '../screens/products/products';
import Search from '../screens/search/search';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalContext} from '../context/Provider';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {globalState} = useContext(GlobalContext);
  const screenCategory = globalState.category;
  const productTitle = globalState?.filteredProduct.title;

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
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            title: productTitle,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: 'Search For Products',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
