import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradientView from '../Component/LinearGradientView';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {useSelector} from 'react-redux';
const TaskDetail = ({route, navigation}) => {
  const appState = useSelector(state => state.app);
  const userEmail = appState.user.email;
  const {id} = route.params;
  const [task, setTask] = useState([]);
  // định dạng ngày
  const formatDate = dateString => {
    const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options); // Dùng 'en-GB' để định dạng dd/MM/yyyy
  };
  useEffect(() => {
    const fetchTaskDetail = async () => {
      try {
        // Sửa URL thành http://10.0.2.2:2610/users/taskdetail
        const response = await axios.post(
          'http://10.0.2.2:2610/users/taskdetail',
          {email: userEmail, taskId: id},
        );
        setTask(response.data.user);
      } catch (error) {
        console.error('Error fetching task detail:', error);
      }
    };

    fetchTaskDetail();
  }, [userEmail, id]);
  // lấy api done Task
  const markTaskAsDone = async (email, taskId) => {
    try {
      const response = await axios.post('http://10.0.2.2:2610/users/donetask', {
        email: userEmail,
        taskId: id,
      });
      console.log('Task marked as done:', response.data);
    } catch (error) {
      console.error('Error marking task as done:', error);
    }
  };
  const handleMarkAsDone = () => {
    try {
      markTaskAsDone(userEmail, id);
      ToastAndroid.show('Task has been marked as done!', ToastAndroid.SHORT);
      navigation.navigate('HomeScreen');
    } catch (error) {
      ToastAndroid.show(
        'Failed to mark task as done. Please try again.',
        ToastAndroid.SHORT,
      );
    }
  };
  // lấy api xóa task
  const deleteTask = async (email, taskId) => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:2610/users/deletetask',
        {email: userEmail, taskId: id},
      );
      console.log('Task deleted:', response.data);
    } catch (error) {
      console.error('Error delete task:', error);
    }
  };
  const handleDelete = () => {
    try {
      deleteTask(userEmail, id);
      ToastAndroid.show('Task delete success', ToastAndroid.SHORT);
      navigation.navigate('HomeScreen');
    } catch (error) {
      ToastAndroid.show(
        'Failed to delete Please try again.',
        ToastAndroid.SHORT,
      );
    }
  };
  return (
    <LinearGradientView style={styles.container}>
      <Text style={styles.title}>Task Detail</Text>
      <View style={styles.taskView}>
        <Text style={styles.nameTask}>{task.title}</Text>
        <View style={styles.timeView}>
          <Text style={styles.day}>{formatDate(task.day)} </Text>
          <Text style={styles.time}> {task.time}</Text>
        </View>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.time}>{task.description}</Text>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={handleMarkAsDone}>
          <Image
            style={{height: 20, width: 20, marginBottom: 5}}
            source={require('../assets/img/done.png')}></Image>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Image
            style={{height: 20, width: 20, marginBottom: 5}}
            source={require('../assets/img/delete.png')}></Image>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            style={{height: 20, width: 20, marginBottom: 5}}
            source={require('../assets/img/Pin.png')}></Image>
          <Text style={styles.buttonText}>Pin</Text>
        </TouchableOpacity>
      </View>
    </LinearGradientView>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    marginTop: 35,
    marginLeft: 30,
    color: '#fff',
  },
  taskView: {
    marginLeft: 37,
    marginTop: 50,
  },
  nameTask: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  day: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: '#fff',
  },
  time: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: '#fff',
  },
  descriptionView: {
    width: 331,
    height: 267,
    marginLeft: 37,
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    width: 88,
    height: 71,
    backgroundColor: '#001F3F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FFF',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    marginHorizontal: 15,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
});
