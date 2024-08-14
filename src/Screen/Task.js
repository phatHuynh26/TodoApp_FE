import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradientView from '../Component/LinearGradientView';
import ImcompleteTaskComponent from '../Component/ImcompleteTaskComponent';
import ModalAddTask from '../Component/ModalAddTask';

const Task = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const task = [
    {id: 1, name: 'football', date: 'Ngày mai', time: 1.3},
    {id: 2, name: 'chơi gái', date: 'Ngày mai', time: 10.3},
    {id: 3, name: 'đá phò', date: 'tối nay', time: 11.3},
    {id: 4, name: 'football game2', date: 'Ngày mai', time: 10.3},
    {id: 5, name: 'football game', date: 'Ngày mai', time: 10.3},
    {id: 6, name: 'nạp game', date: 'Ngày mai', time: 10.3},
    {id: 7, name: 'football2', date: 'Ngày mai', time: 10.3},
    {id: 8, name: 'nạp game', date: 'Ngày mai', time: 10.3},
  ];
  const filteredTask = task.filter(task =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const searchItem = ({item}) => (
    <View style={styles.searchResults}>
      <ImcompleteTaskComponent
        name={item.name}
        date={item.date}
        time={item.time}
      />
    </View>
  );
  const taskList = ({item}) => (
    <View style={styles.taskList}>
      <ImcompleteTaskComponent
        name={item.name}
        date={item.date}
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
          data={task}
          renderItem={taskList}
          scrollEnabled={true}
          keyExtractor={item => item.id}></FlatList>
      </View>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => setModalVisible(true)}>
        <Image
          style={styles.addIcon}
          source={require('../assets/img/add.png')}></Image>
      </TouchableOpacity>
      <View >
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
