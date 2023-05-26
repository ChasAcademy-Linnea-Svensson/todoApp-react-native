import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import AddScreen from '../screens/AddScreen';
import { TodoContext } from '../store/context/todoContext';
import { useContext } from 'react';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const todoContext = useContext(TodoContext);
  const { title, description } = useContext(TodoContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'teal' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Todos',
            headerRight: () => (
              <Button
                title='Add'
                onPress={() => navigation.navigate('Add')}
                color='#fff'
              />
            ),
          })}
        />
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />

        <Stack.Screen
          name='Add'
          component={AddScreen}
          options={({ navigation }) => ({
            presentation: 'modal',
            title: 'New Todo',
            headerRight: () => (
              <Button
                title='Done'
                onPress={() => (todoContext.addItem(), navigation.goBack())}
                disabled={title === '' || description === ''}
                color='#fff'
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
