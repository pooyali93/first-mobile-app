import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import ChildrenExample from './components/ChildrenExample';
import ListItems from './components/ListItems';
import NavigationButton from './components/NavigationButton';

const IndexScreen =({navigation}) => {
  return (
        <View style={styles.container}>
            <NavigationButton  screenName="ScreenOne" navigation={navigation} />
            <NavigationButton screenName="ScreenTwo" navigation={navigation} />
            <Text style={styles.heading}>Fruit List</Text>

            <ScrollView  horizontal={false}>

                <ListItems
                    name="Apple"
                    image={require('../../assets/img/apple.png')}
                />
                <ListItems
                    name="Banana"
                    image={require('../../assets/img/banana.png')}
                />
                <ListItems
                    name="Pear"
                    image={require('../../assets/img/pear.png')}
                />
                <ListItems
                    name="Orange"
                    image={require('../../assets/img/orange.png')}
                />
                <ListItems
                    name="Pomegranate"
                    image={require('../../assets/img/pomeg.png')}
                />
                <ListItems
                    name="Mango"
                    image={require('../../assets/img/mango.png')}
                />           
            </ScrollView>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    //width:'50%',
    backgroundColor:'#fffcf6',
    alignItems:'center',
    justifyContent:'center'
  },
    heading: {
    fontSize:30, 
    fontWeight:'bold',
    color:'#006a6a'
  },

});

export default IndexScreen;