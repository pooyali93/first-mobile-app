import {Text, View, Button} from "react-native"
import NavigationButton from '../components/NavigationButton';
import ChildrenExample from "../components/ChildrenExample";

const ScreenOne = ({navigation}) => {
  return (
    <View>
    <ChildrenExample title="This is Screen One">
        <NavigationButton screenName="IndexScreen" navigation={navigation} />
        <NavigationButton screenName="ScreenTwo" navigation={navigation} />
    </ChildrenExample>
</View>
  )
}

export default ScreenOne;