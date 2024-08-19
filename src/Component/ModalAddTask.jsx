import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

const ModalAddTask = ({visible, onClose, email}) => {
  const [title, setTitle] = useState('');
  const appState = useSelector(state => state.app);

  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('09:00');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(false);
    setTime(
      `${String(currentTime.getHours()).padStart(2, '0')}:${String(
        currentTime.getMinutes(),
      ).padStart(2, '0')}`,
    );
  };
  const emailUser = appState.user.email
  
  const handleCreate = async () => {
    try {
      const formattedDate = date.toISOString(); // Convert date to ISO string
      const response = await axios.post('http://10.0.2.2:2610/users/addtask', {
        email: emailUser,
        title: title, // Use the title input value
        description: description,
        day: formattedDate,
        time: time,
      });
      if (response.status === 200) {
        ToastAndroid.show("Add Task Successfully", ToastAndroid.SHORT)
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="white"
            value={title}
            onChangeText={setTitle}
          />
          <View style={styles.inputDescription}>
            <Image
              style={{height: 15, width: 15, marginTop: 10}}
              source={require('../assets/img/description.png')}
            />
            <TextInput
              style={styles.description}
              placeholder="Description"
              placeholderTextColor="white"
              value={description}
              onChangeText={setDescription}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}>
              <Image
                style={{height: 15, width: 15, marginTop: 3}}
                source={require('../assets/img/calender.png')}
              />
              <Text style={styles.buttonText}>Date</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowTimePicker(true)}>
              <Image
                style={{height: 15, width: 15, marginTop: 3}}
                source={require('../assets/img/time.png')}
              />
              <Text style={styles.buttonText}>Time</Text>
            </TouchableOpacity>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          {showTimePicker && (
            <DateTimePicker
              value={date}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}

          <View style={styles.row}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.createButton}
              onPress={handleCreate}>
              <Text style={styles.createText}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#1e3a5f', // màu tối
    color: 'white',
  },
  inputDescription: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#1e3a5f', // màu tối
    color: 'white',
  },
  description: {
    height: 100,
    textAlignVertical: 'top',
    color: 'white',

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  dateButton: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#1e3a5f',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
  cancelButton: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  createButton: {
    flex: 1,
    backgroundColor: '#0e76a8',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelText: {
    color: '#000',
  },
  createText: {
    color: 'white',
  },
});

export default ModalAddTask;
