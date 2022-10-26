import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';

const ViewItemScreen = ({route}) => {
    const {id, title,content, date} = route.params;
  return (
       <View style={styles.itemContainer}>
            <Text>ID: {id}</Text>
            <Text>Title: {title}</Text>
            <Text>Content: {content}</Text>
            <Text>Date: {new Date(date).toLocaleDateString()}</Text>
            <Text>Time: {new Date(date).toLocaleTimeString()}</Text>
       </View>
  );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor:'#ffffff',
        marginBottom:0,
        padding:20,
        borderBottomWidth: 1,
        borderBottomColor:'#cfcfd1',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    
    },
});

export default ViewItemScreen;