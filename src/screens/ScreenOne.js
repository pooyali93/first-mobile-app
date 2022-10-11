import {Text, View, Button} from "react-native"

const ScreenOne = ({navigation}) => {
  return (
    <View>
            <NavigationButton screenName="IndexScreen" navigation={navigation} />
            <NavigationButton screenName="ScreenTwo" navigation={navigation} />

    </View>
  )
}

export default ScreenOne;