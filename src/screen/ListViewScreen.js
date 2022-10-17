import { useState } from "react";
import { View, StyleSheet, Text, FlatList} from "react-native"


const dummyData = [
    {
        id:-1,
        title:"This is my first item",
        content:"find your organic fruit amd veg",
        date: new Date()
    },
    {
        id:-2,
        title:"This is my second item",
        content:"find your organic fruit amd veg",
        date: new Date()
    },
    {
        id:-3,
        title:"This is my third item",
        content:"find your organic fruit amd veg",
        date: new Date()
    },
    {
        id:-4,
        title:"This is my fourth item",
        content:"find your organic fruit amd veg",
        date: new Date()
    },
]
const ListViewScreen = () => {
    const [items, setItems] = useState(dummyData);
  return (
    <View  style={styles.mainContainer}>
        <FlatList 
            data={items}
            keyExtractor={(e) => e.id.toString()}
            renderItem={({item}) =>  {
            return (
                <View style={styles.itemContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>
                            {item.date.toLocaleDateString()}
                        </Text>
                        <Text>
                            {item.date.toLocaleTimeString()}
                        </Text>
                    </View>
                        <Text style={styles.titleText}> 
                            {item.title}
                        </Text>
                </View>
            );
        }}
        />
    </View>
  )
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop:10,
        borderColor:'red',
        padding:10,
    },
    itemContainer: {
        backgroundColor:'#ffffff',
        marginBottom:0,
        padding:10,
        borderBottomWidth: 1,
        borderBottomColor:'#cfcfd1',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        flex:1,
        flexDirection: 'row',
        alignItems:'center'
    },
    dateContainer: {
        flexDirection:'column',
        alignItems:'center'
    },
    dateText: {
        fontSize:16,
        fontWeight:'bold'
    },
    titleText: {
        fontSize:16,
        paddingLeft:15,
        flex:1,
        alignSelf:'flex-start',
    },
});

export default ListViewScreen