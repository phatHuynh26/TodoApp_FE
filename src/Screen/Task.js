import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradientView from '../Component/LinearGradientView';
import ImcompleteTaskComponent from '../Component/ImcompleteTaskComponent';
import ModalAddTask from '../Component/ModalAddTask';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';

const Task = () => {
  const appState = useSelector(state => state.app);
  const [searchQuery, setSearchQuery] = useState('');
  const [taskDoing, setTaskDoing] = useState([]);
  const EmailUser = appState.user.email;
  const taskIds = taskDoing.map(task => task._id);

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
  const filteredTask = taskDoing.filter(
    task =>
      task.description &&
      typeof task.description === 'string' &&
      task.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const searchItem = ({item}) => (
    <View style={styles.searchResults}>
      <ImcompleteTaskComponent
        name={item.description}
        date={formatDate(item.day)}
        time={item.time}
      />
    </View>
  );
  const formatDate = dateString => {
    const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options); // Dùng 'en-GB' để định dạng dd/MM/yyyy
  };
  const taskList = ({item}) => (
    <View style={styles.taskList}>
      <ImcompleteTaskComponent
        name={item.description}
        date={formatDate(item.day)}
        time={item.time}
      />
    </View>
  );

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <LinearGradientView style={{flex: 1}}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by task title"
        placeholderTextColor={'gray'}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      {searchQuery.length > 0 && (
        <FlatList
          scrollEventThrottle={16}
          data={filteredTask}
          renderItem={searchItem}
          keyExtractor={item => item.id.toString()}
        />
      )}

      <Text
        style={[
          styles.title,
          {marginTop: 26, marginLeft: 16, marginBottom: 10},
        ]}>
        Task List
      </Text>
      <View style={{height: 340}}>
        <FlatList
          style={{marginTop: 10}}
          data={taskDoing}
          renderItem={taskList}
          scrollEnabled={true}
          keyExtractor={item => item._id.toString()}></FlatList>
      </View>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => setModalVisible(true)}>
        <Image
          style={styles.addIcon}
          source={require('../assets/img/add.png')}></Image>
      </TouchableOpacity>
      <View>
        <ModalAddTask
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          // onCreate={handleCreate}
        />
      </View>
    </LinearGradientView>
  );
};

export default Task;

const styles = StyleSheet.create({
  searchInput: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#102D53',
    marginTop: 30,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  searchResults: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: 'white',
  },
  taskList: {
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonAdd: {
    height: 50,
    width: 50,
    backgroundColor: '#63D9F3',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 320,
    marginTop: 20,
  },
  addIcon: {
    height: 17.5,
    width: 17.5,
    resizeMode: 'contain',
    tintColor: 'white', // or 'rgba(255, 255, 255, 0.5)' for semi-transparent
  },
});
