import React, { useState , useContext} from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import ItemContext from '../contexts/ItemContext';


const AddItemScreen = ({navigation}) => {
    const {create} = useContext(ItemContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  return (
        <View>
            <Text style={styles.textLabel}> Enter a title: </Text>
            <TextInput 
                style={styles.textInput} 
                placeholder="Type title here" value={title}
                onChangeText={(text) => {
                setTitle(text);
                }}
            />
            <Text style={styles.textLabel}> Enter your content: </Text>
            <TextInput 
                style={styles.textInput} multiline
                placeholder="Type content here" value={content}
                onChangeText={(text) => {
                setContent(text);
                }}
            />
            <Button style={styles.btn} title="Submit Item" onPress={() => {
                create(title, content,() => navigation.pop());
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

export default AddItemScreen;