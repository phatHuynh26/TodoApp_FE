import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradientView from '../Component/LinearGradientView';
import ImcompleteTaskComponent from '../Component/ImcompleteTaskComponent';
import CompletedTaskComponent from '../Component/CompletedTaskComponent';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const appState = useSelector(state => state.app);
  const [taskDoing, setTaskDoing] = useState([]);
  const [taskDone, setTaskDone] = useState('');

  const EmailUser = appState.user.email;
  // gọi task doing
  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await axios.post(
          'http://10.0.2.2:2610/users/showtask',
          {
            email: EmailUser,
          },
        );
        setTaskDoing(response.data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    if (EmailUser) {
      getTask();
      // Thiết lập interval để gọi API định kỳ
      const intervalId = setInterval(() => {
        getTask();
      }, 2000); // Cập nhật mỗi 10 giây

      // Cleanup function để dừng interval khi component unmount
      return () => clearInterval(intervalId);
    } else {
      console.error('EmailUser is not provided');
    }
  }, [EmailUser]);
  // gọi task đã xong
  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await axios.post(
          'http://10.0.2.2:2610/users/showtaskdone',
          {
            email: EmailUser,
          },
        );
        setTaskDone(response.data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    if (EmailUser) {
      getTask();
      // Thiết lập interval để gọi API định kỳ
      const intervalId = setInterval(() => {
        getTask();
      }, 2000); // Cập nhật mỗi 10 giây

      // Cleanup function để dừng interval khi component unmount
      return () => clearInterval(intervalId);
    } else {
      console.error('EmailUser is not provided');
    }
  }, [EmailUser]);
  const formatDate = dateString => {
    const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options); // Dùng 'en-GB' để định dạng dd/MM/yyyy
  };
  // lấy id

  const handleGetIDTask = id => {
    navigation.navigate('Detail', {id: id});
  };
  const doingItem = ({item}) => (
    <TouchableOpacity onPress={() => handleGetIDTask(item._id)}>
      <ImcompleteTaskComponent
        name={item.description}
        date={formatDate(item.day)}
        time={item.time}
      />
    </TouchableOpacity>
  );
  const doneItem = ({item}) => (
    <TouchableOpacity onPress={() => handleGetIDTask(item._id)}>
      <CompletedTaskComponent
        name={item.description}
        date={formatDate(item.day)}
        time={item.time}
      />
    </TouchableOpacity>
  );
  return (
    <LinearGradientView style={{flex: 1}}>
      <View style={styles.headerUser}>
        <Image
          style={styles.avatar}
          source={require('../assets/img/user.png')}></Image>
        <View style={styles.infoUser}>
          <Text style={styles.name}>{appState.user.name}</Text>
          <Text style={styles.email}>{appState.user.email}</Text>
        </View>
        <Image
          style={styles.bell}
          source={require('../assets/img/Bell.png')}></Image>
      </View>
      <Text
        style={[
          styles.title,
          {marginTop: 26, marginLeft: 16, marginBottom: 10},
        ]}>
        Incompletetask
      </Text>
      <View style={{height: 200}}>
        <FlatList
          style={{
            margin: 10,
            backgroundColor: taskDoing.length > 0 ? 'transparent' : 'white',
            borderRadius: 15,
          }}
          data={taskDoing}
          renderItem={doingItem}
          scrollEnabled={true}
          keyExtractor={item => item._id.toString()}></FlatList>
      </View>
      <Text
        style={[
          styles.title,
          {marginTop: 26, marginLeft: 16, marginBottom: 10},
        ]}>
        CompletedTask
      </Text>
      <View style={{height: 200}}>
        <FlatList
          style={{
            margin: 10,
            backgroundColor: taskDone.length > 0 ? 'transparent' : 'white',
            borderRadius: 15,
          }}
          data={taskDone}
          renderItem={doneItem}
          scrollEnabled={true}
          keyExtractor={item => item._id.toString()}></FlatList>
      </View>
    </LinearGradientView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerUser: {
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 16,
    height: 51,
    width3: 374,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 52,
    borderRadius: 25,
  },
  infoUser: {
    marginLeft: 16,
    width: 267,
  },
  name: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins_SemiBold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Poppins_Medium',
  },
  bell: {
    width: 31,
    height: 30,
    borderRadius: 25,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: 'white',
  },
});
