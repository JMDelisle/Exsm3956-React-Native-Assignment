import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HappyBirthday from './HappyBirthday'
import HappyBirthdayCountdown from './HappyBirthdayCountdown'

// import { SafeAreaView } from 'react-native-safe-area-context';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
          {/* Anything outside of the Stack.Navigator will be persistent across screens (useful for menus). */}
          <Text>Exsm3956- React Native </Text>
          <Stack.Navigator>
            <Stack.Screen name="HappyBirthday" component={HappyBirthday} />
            <Stack.Screen name="HappyBirthdayCountDown" component={HappyBirthdayCountdown} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})