import { StyleSheet, Text, View, Button } from 'react-native';


export default function HappyBirthdayCountdown({ navigation, route }) {
  return (
    <View style={styles.container}>
      {/* Since we gave a param called test to navigate, we can pull it out here. Just be careful if you have multiple methods of navigation that you don't wind up with a null reference. */}
      <Text>Your birthday countdown is now commencing, {route.params.test}</Text>
      <Button title="Go back to date picker" onPress={() => {
        // Navigate can also just accept the name of the screen, without params.
        navigation.navigate('App');
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
