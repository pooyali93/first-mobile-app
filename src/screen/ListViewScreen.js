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
]
const ListViewScreen = () => {
    const [items, setItems] = useState(dummyData);
    
  return (
    <View>
        <FlatList
            data={items}
            keyExtractor={(e) => e.id.toString()}
            renderItem={(e) => <Text> {e.title} </Text>}
        />

    </View>
  )
};

const styles = StyleSheet.create({});

export default ListViewScreen