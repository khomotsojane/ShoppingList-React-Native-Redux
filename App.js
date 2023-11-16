import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import List from './components/List';
import YourCart from './components/YourCart';
import ViewItem from './components/ViewItem';
import { FoodProvider } from './Manager/FoodManager';



const Stack = createStackNavigator();

export default function App() {
  return (
    <FoodProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen name='List' component={List} options={{headerShown: false}} />
        <Stack.Screen name='ViewItem' component={ViewItem} />
        <Stack.Screen name='YourCart' component={YourCart} />
      </Stack.Navigator>
    </NavigationContainer>
    </FoodProvider>
    
 
  )
}
