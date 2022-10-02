import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import DatePicker from 'react-native-neat-date-picker'
import moment from 'moment/moment'

const App = () => {
  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false)

  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const openDatePickerSingle = () => setShowDatePickerSingle(true)

  // const new_today = Date.now();

  // var userDate = new Date().getDate(); //To get the Current Date
  var diff_date = moment().format('YYYY-MM-DD');
  // var userDate = new Date().getDate().padStart(2, '0');
  // var month = new Date().getMonth() + 1; //To get the Current Month
  // var year = new Date().getFullYear(); //To get the Current Year
  // const todaydate = `${year}-${month}-${userDate}`;
  // const todaydate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;

  

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

// useEffect(() => {
//   if(date === date.today){
//     //goto page
//     console.log(date)
//   } else {
//     // go to other page 
//     console.log(date)
//   }, [date]);
 
 
useEffect(() => {
  if(date === diff_date){
  console.log("they are the same date!")
  } else {
  console.log(diff_date)
}}, [date]);



  return (
    <View style={styles.container}>
      <Text>Click below to determine your date of birth.</Text>
      {/* Single Date */}
      
      <Button title={'Click Me'} onPress={openDatePickerSingle} />
      <Button title="Today?" disabled onPress={() => Alert.alert('Must be todays date!')} />
      <DatePicker
        isVisible={showDatePickerSingle}
        mode={'single'}
        onCancel={onCancelSingle}
        onConfirm={onConfirmSingle}


      />
      <Text>{date}</Text>

      
      <Text>{startDate && `${startDate} ~ ${endDate}`}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})