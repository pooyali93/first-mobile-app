import IndexScreen from './src/screens/IndexScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';
import { StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();
const App = () =>{
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Index' 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          borderWidth:1,
          borderColor:'#006a6a',
          
        },
        headerTintColor: '#006a6a',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
      }}>
        <Stack.Screen 
          name='Index'
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