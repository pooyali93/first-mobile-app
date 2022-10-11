import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  horizontal={false}> 
      <Text style={styles.heading}>Fruit List</Text> 
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Apple</Text>
          <Image source={require('./assets/img/apple.png')} style={styles.img}/>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Banana</Text>
          <Image source={require('./assets/img/banana.png')} style={styles.img}/>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Pear</Text>
          <Image source={require('./assets/img/pear.png')} style={styles.img}/>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Orange</Text>
          <Image source={require('./assets/img/orange.png')} style={styles.img}/>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Pomegranate</Text>
          <Image source={require('./assets/img/pomeg.png')} style={styles.img}/>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Mango</Text>
          <Image source={require('./assets/img/mango.png')} style={styles.img}/>
        </View>
        
      </ScrollView>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    //width:'50%',
    backgroundColor:'#fffcf6',
    alignItems:'center',
    justifyContent:'center'
  },

  itemContainer: {
    borderWidth:1,
    borderColor:'#006a6a',
    borderRadius:5,
    padding:5,
    marginVertical:5,
  },
  heading: {
    fontSize:30, 
    fontWeight:'bold',
    color:'#006a6a'
  },
  title:{
    fontSize:20, 
    color:'green',
    marginTop:10
  },
  img: {
    width: 250,
    height:250
  }






});
