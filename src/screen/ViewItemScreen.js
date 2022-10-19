import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';

const ViewItemScreen = ({route}) => {
    const {id, title,content, date} = route.params;
  return (
       <View>
            <Text>ID: {id}</Text>
            <Text>Title {title}</Text>
            <Text>Content {content}</Text>
            <Text>Date {new Date(date).toLocaleDateString()}</Text>
            <Text>Time {new Date(date).toLocaleTimeString()}</Text>
       </View>
  );
};

const styles = StyleSheet.create({});

export default ViewItemScreen;