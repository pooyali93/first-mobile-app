import { useEffect, useContext} from "react";
import { View, StyleSheet, Text, FlatList, Pressable} from "react-native"
import {MaterialIcons} from '@expo/vector-icons'
import ItemContext from "../contexts/ItemContext";


const ListViewScreen = ({navigation}) => {
    const {state, remove} = useContext(ItemContext);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Add')}>
                    <MaterialIcons name='add' size={28} color="black" />
                </Pressable>
            )
        })
    }, [state]);
  return (
        <View  style={styles.mainContainer}>
            <FlatList 
                data={state}
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
                            <Pressable onPress={() => {
                                remove(item.id)
                            }}
                            >
                            <MaterialIcons name='delete' size={28} color="red" /></Pressable>
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