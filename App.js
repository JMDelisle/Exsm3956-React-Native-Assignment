import React, { useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import DatePicker from 'react-native-neat-date-picker'

const App = () => {
  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false)

  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const openDatePickerSingle = () => setShowDatePickerSingle(true)

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


  return (
    <View style={styles.container}>
      <Text>Click below to determine your date of birth.</Text>
      {/* Single Date */}
      <Button title={'Click Me'} onPress={openDatePickerSingle} />
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