import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import LinearGradientView from '../Component/LinearGradientView';
import {Calendar} from 'react-native-calendars';

const ManageTime = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [task, setTask] = useState('');
  const onDayPress = day => {
    setSelectedDate(day.dateString);
  };

  const handleSubmit = () => {
    // Handle task submission
    console.log(`Task: ${task} for Date: ${selectedDate}`);
  };
  return (
    <View style={styles.container}>
      <Calendar
        style={{marginTop: 10, backgroundColor: '#52B5F5'}}
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: {selected: true, selectedColor: '#00ADF5'},
        }}
        theme={{
          arrowColor: '#00ADF5',
          todayTextColor: '#00ADF5',
          selectedDayBackgroundColor: '#00ADF5',
          selectedDayTextColor: '#FFFFFF',
          textDayFontWeight: 'bold',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
        }}
      />
      <View style={styles.taskContainer}>
        <Text style={styles.label}>
          Set task for {selectedDate || 'Select a date'}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default ManageTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#002F63',
  },
  taskContainer: {
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
});
