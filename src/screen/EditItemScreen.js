import React, { useState , useContext} from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import ItemContext from '../contexts/ItemContext';


const EditItemScreen = ({navigation, route}) => {
    const {id} = route.params;
    const {state, update} = useContext(ItemContext);
    const currentItem = state.find((item) => item.id === id);
    const [title, setTitle] = useState(currentItem.title);
    const [content, setContent] = useState(currentItem.content);
  return (
        <View>
            <Text style={styles.textLabel}> Enter your title: </Text>
            <TextInput 
                style={styles.textInput} 
                placeholder="Type title here" 
                value={title}
                onChangeText={(value) => {
                setTitle(value);
                }}
            />
            <Text style={styles.textLabel}> Enter your content: </Text>
            <TextInput 
                style={styles.textInput} multiline
                placeholder="Type content here" 
                value={content}
                onChangeText={(value) => {
                setContent(value);
                }}
            />

            
            <Button style={styles.btn} title="Update Item" onPress={() => {
                update(currentItem.id, title, content, currentItem.date, () => navigation.pop());
             }}
            />
        </View>
  );
};


const styles = StyleSheet.create({
    textInput: {
        fontSize:20,
        padding:10,
        margin:5,
        borderWidth:1,
    },
    textLabel: {
        fontSize:18,
        paddingLeft:10,
        marginTop:10,
    },
    btn: {
        borderStartColor:'red',
        borderWidth:1,
        borderColor:'#006a6a',
        borderRadius:5,
    },
});

export default EditItemScreen;