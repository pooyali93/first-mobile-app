import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ViewItemScreen = ({navigation, route}) => {
    const {id, title,content, date} = route.params;
  return (
       <View style={styles.itemContainer}>
            <Text>ID: {id}</Text>
            <Text>Title: {title}</Text>
            <Text>Content: {content}</Text>
            <Text>Date: {new Date(date).toLocaleDateString()}</Text>
            <Text>Time: {new Date(date).toLocaleTimeString()}</Text>
            <Button title="Edit Item" onPress={() => {
            navigation.navigate('Edit', {id:id});
        }} />
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

/*
const {id} = route.params;
const {state, update} = useContext(ItemContext);
const currentEntry = state.find((e) => e.id === id);
const [title, setTitle] = useState(currentEntry.title);
const [content, setContent] = useState(currentEntry.content);
const [date, setDate] = useState(currentEntry.date);
return (
   <View style={styles.itemContainer}>
        <Text>ID: {id}</Text>
        <Text>Title: {setTitle}</Text>
        <Text>Content: {setContent}</Text>
        <Text>Date: {setDate}</Text>
        <Button title="Edit Item" onPress={() => {
            navigation.navigate('Edit', {id:id});
        }} />
   </View>
); */