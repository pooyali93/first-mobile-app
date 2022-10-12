import IndexScreen from './src/screen/IndexScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from './src/screen/ScreenOne';
import ScreenTwo from './src/screen/ScreenTwo';
import { StyleSheet } from 'react-native';
import AddItemScreen from './src/screen/AddItemScreen';
import ListViewScreen from './src/screen/ListViewScreen';


const Stack = createNativeStackNavigator();
const App = () =>{
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='List'>
      <Stack.Screen 
          name='List'
          component={ListViewScreen}
          options={{title: "View all items" }}
        />
        <Stack.Screen 
          name='IndexScreen'
          component={IndexScreen}
          options={{title: "Shop Organic Fruit & Veg" }}
        />
        <Stack.Screen
          name='ScreenOne'
          component={ScreenOne}
          options={{title: "Screen 1" }}
        />
        <Stack.Screen
          name='ScreenTwo'
          component={ScreenTwo}
          options={{title: "Screen 2" }}
        />
        <Stack.Screen
          name='Add'
          component={AddItemScreen}
          options={{title: "Add a new item" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth:1,
    borderColor:'#006a6a',
    borderRadius:5,
},
});
export default App;