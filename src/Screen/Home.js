import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import LinearGradientView from '../Component/LinearGradientView';
import ImcompleteTaskComponent from '../Component/ImcompleteTaskComponent';
import CompletedTaskComponent from '../Component/CompletedTaskComponent';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const appState = useSelector(state => state.app);


  const tasksDoing = [
    {id: 1, name: 'đi ỉa', date: 'Ngày mai', time: 10.3},
    {id: 2, name: 'chơi gái', date: 'Ngày mai', time: 10.3},
    {id: 3, name: 'đá phò', date: 'tối nay', time: 11.3},
    {id: 4, name: 'nạp game', date: 'Ngày mai', time: 10.3},
  ];
  const tasksDone = [
    {id: 1, name: 'làm bài', date: 'Ngày mai', time: 10.3},
    {id: 2, name: 'chơi gái', date: 'Ngày mai', time: 10.3},
    {id: 3, name: 'đá phò', date: 'tối nay', time: 11.3},
    {id: 4, name: 'nạp game', date: 'Ngày mai', time: 10.3},
  ];
  const doingItem = ({item}) => (
    <ImcompleteTaskComponent
      name={item.name}
      date={item.date}
      time={item.time}
    />
  );
  const doneItem = ({item}) => (
    <CompletedTaskComponent
      name={item.name}
      date={item.date}
      time={item.time}
    />
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
          style={{margin: 10}}
          data={tasksDoing}
          renderItem={doingItem}
          scrollEnabled={true}
          keyExtractor={item => item.id}></FlatList>
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
          style={{margin: 10}}
          data={tasksDone}
          renderItem={doneItem}
          scrollEnabled={true}
          keyExtractor={item => item.id}></FlatList>
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
