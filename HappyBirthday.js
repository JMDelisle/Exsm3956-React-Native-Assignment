import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import DatePicker from 'react-native-neat-date-picker'
import moment from 'moment/moment'
import { Navigation } from 'react-calendar'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = ({ navigation }) => {
  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true);
  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const openDatePickerSingle = () => setShowDatePickerSingle(true);
  // const new_today = Date.now();

  var diff_date = moment().format('YYYY-MM-DD');

  const onCancelSingle = () => {
    // You should close the modal in here
    setShowDatePickerSingle(false)
  }

  const onConfirmSingle = (output) => {
    // You should close the modal in here
    setShowDatePickerSingle(false)

    // The parameter 'output' is an object containing date and dateString (for single mode).
    // For range mode, the output contains startDate, startDateString, endDate, and EndDateString
    console.log(output)
    setDate(output.dateString)
  }

  useEffect(() => {
    setIsDisabled(false);
  }, [date]);





  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.row}>Click below to determine your date of birth.</Text>
        {/* Single Date */}

        <Button title={'Click Me'} onPress={openDatePickerSingle} style={styles.button} />
        <Button value={date} title='Today?' disabled={isDisabled} onPress={() => navigation.navigate('HappyBirthdayCountDown',{paramKey: date})} style={styles.button} />
        {/* <Button title="Go to Birthday-Count-Down" onPress={() => { navigation.navigate('HappyBirthdayCountDown'); 
      }}/> */}


        {/* <Button title="Today?" disabled onPress={() => Alert.alert('Must be todays date!')} /> */}
        <DatePicker
          isVisible={showDatePickerSingle}
          mode={'single'}
          onCancel={onCancelSingle}
          onConfirm={onConfirmSingle}


        />
        <Text>{date}</Text>


        <Text>{startDate && `${startDate} ~ ${endDate}`}</Text>
      </View>
    </SafeAreaView>
  )
}

export default App

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
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth
  }

})