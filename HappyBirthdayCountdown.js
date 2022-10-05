import React from 'react';
import { SafeAreaView, StyleSheet, Button, View, Text, ImageBackground } from 'react-native';
import { withTheme } from 'styled-components';

const localImage = require("./assets/happybirthday.jpg");


const HappyBirthdayCountDown = ({route}) => {
    const yourBirthday = route.params.paramKey;
    var testYourBirthday;
    var invalidBirthday = false;

    //Format asked for: YYYY/MM/DD
    testYourBirthday = new Date(yourBirthday);

    if (testYourBirthday == "invalid date"){
        console.log("1x")
        invalidBirthday = true;
    }
    if (testYourBirthday == "Invalid Date"){
      invalidBirthday = true;
    }
    if (testYourBirthday == "NaN"){
        // console.log("3x")
        invalidBirthday = true;
    }
    if (Math.floor(testYourBirthday.getUTCFullYear()) > 2022){
        console.log("4x => " + Math.floor(testYourBirthday.getUTCFullYear()))
        invalidBirthday = true;
    }

    var todayDate = new Date();
    var currentBirthdate = testYourBirthday.setFullYear("2022")
    var currentBirthdates = new Date(currentBirthdate)
    var timeDifference = currentBirthdates.getTime() - todayDate.getTime() ;
    var daysDifference = timeDifference / (1000 * 3600 * 24);
    // If positive its in the future (just abs it and all good!)
    var howManyDays = Math.ceil(daysDifference);
    // If it was a positive value we passed it... @#$@# so its the previous year then til 
    if (howManyDays < 0) {
      howManyDays = 365 + howManyDays;
    }
    var birthdayCountdown = ""
    if (howManyDays == 0){
      birthdayCountdown = "Happy BDay!"
    } else {
      birthdayCountdown = "Days til your birthday: " + howManyDays + ""
    }


    // Calculating age 
    var actualAge = new Date(yourBirthday);

    var dateSelected = actualAge.getFullYear()
    var currentYear = todayDate.getFullYear()
    var ageDetermined = currentYear - dateSelected
    var textAged = "You are " + ageDetermined + " years old."

    return (
      <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground source={localImage} style={{width: 800, height: 600}}>
  
          {/* Since we gave a param called test to navigate, we can pull it out here. Just be careful if you have multiple methods of navigation that you don't wind up with a null reference. */}
          <Text style={styles.row}>Happy Birthday Countdown! </Text>
          <Text style={styles.row}>
                    Your Birthday: {yourBirthday}<br/>
                    {birthdayCountdown}<br/> {textAged}<br/>
                </Text>

          <Button title="Go back to Calendar" onPress={() => {
            // Navigate can also just accept the name of the screen, without params.
            navigation.navigate('HappyBirthday');
          }} />
        </ImageBackground>
  
      </View>
      </SafeAreaView>
    );
  }
  
export default HappyBirthdayCountDown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    padding: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  row: {
    justifyContent: 'center',
    alignItems: "center",
    color: 'white',
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

// import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

// const localImage = require("./assets/happybirthday.jpg");


// export default function HappyBirthdayCountDown({ navigation, route }) {


  
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={localImage} style={styles.container}>

//         {/* Since we gave a param called test to navigate, we can pull it out here. Just be careful if you have multiple methods of navigation that you don't wind up with a null reference. */}
//         <Text>Happy Birthday Countdown commencing! </Text>
//         <Button title="Go back to Calendar" onPress={() => {
//           // Navigate can also just accept the name of the screen, without params.
//           navigation.navigate('HappyBirthday');
//         }} />
//       </ImageBackground>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });





