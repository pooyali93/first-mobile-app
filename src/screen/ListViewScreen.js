import { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Pressable} from "react-native"
import {MaterialIcons} from '@expo/vector-icons'
import uuid from 'react-native-uuid';

const dummyData = [
    {
        id:uuid.v4(),
        title:"This is my first item",
        content:"find your organic fruit amd veg",
        date: new Date()
    },
    {
        id:uuid.v4(),
        title:"This is my second item",
        content:"find your organic fruit amd veg",
        date: new Date()
    },
    {
        id:uuid.v4(),
        title:"This is my third item",
        content:"find your organic fruit amd veg",
        date: new Date()
    },
]
const ListViewScreen = ({navigation}) => {
    const [items, setItems] = useState(dummyData);
    const addNewItem = (title, content) =>{ 
        setItems([
            ...items,
            {
                id: uuid.v4(),
                title:title,
                content:content,
                date: new Date()

            }
        ])
    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Add', {callback:addNewItem})}>
                <Text style={styles.iconText}>Add</Text><MaterialIcons name='add' size={28} color="black" />
                </Pressable>
            )
        })
    }, [items]);
  return (
        <View  style={styles.mainContainer}>
            <FlatList 
                data={items}
                keyExtractor={(e) => e.id.toString()}
                renderItem={({item}) =>  {
                return (
                    <Pressable onPress={() => navigation.navigate('ViewItem', { 
                        id: item.id,
                        title: item.title,
                        content: item.content,
                        date:item.date.toUTCString()
                     } )}>
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
                    </Pressable>
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
    iconText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'centre'
    },
  });


export default ListViewScreen