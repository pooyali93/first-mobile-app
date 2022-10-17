import {View, Text, StyleSheet, Image} from "react-native"

const ListItems = ({name, image}) => {
  return (
    <View style={styles.itemContainer}>
        <Text style={styles.title}>{name}</Text>
        <Image source={image} style={styles.img}/>
    </View>
  )
}

const styles = StyleSheet.create({

    itemContainer: {
        borderWidth:1,
        borderColor:'#cfcfd1',
        borderRadius:5,
        marginVertical:5,
        backgroundColor:'#ffffff'
      },
      title:{
        fontSize:20, 
        padding:10,
        color:'white',
        textAlign: 'center',
        backgroundColor:'#006a6a'
      },
      img: {
        width: 180,
        height:200,
      }
})

export default ListItems