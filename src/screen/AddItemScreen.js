import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

const AddItemScreen = () => {
    const [name, setName] = useState('');
  return (
    <View>
        <Text style={styles.textLabel}> Enter Fruit Name:</Text>
        <TextInput 
            style={styles.textInput} 
            placeholder="Type here"
            value={name}
            onChangeText={(text) => {
               setName(text);
            }}
        />
        <Text style={styles.textLabel}>Your favorite fruit is {name}</Text>
    </View>
  )
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
});

export default AddItemScreen;