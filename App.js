import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';
import Header from './components/header';
import { useState } from 'react';

export default function App() {

  const [data, setData] = useState([
    {id:1,text:'shopping'},
    {id:2,text:'sleeping'},
    {id:3,text:'study'}
]);

  return (
    <View style={styles.container}>
      <Header/>
      <List data={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
