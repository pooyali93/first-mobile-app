import {Text, View, Button} from "react-native"
import ChildrenExample from "./components/ChildrenExample";

const ScreenTwo = ({navigation}) => {
  return (
    <View>
        <ChildrenExample title="This is Screen Two">
            <NavigationButton screenName="IndexScreen" navigation={navigation} />
            <NavigationButton screenName="ScreenOne" navigation={navigation} />
        </ChildrenExample>
    </View>
  )
}

export default ScreenTwo;