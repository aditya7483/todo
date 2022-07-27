import { StyleSheet, Text, View} from 'react-native';
import List from './components/List';
import Header from './components/header';
import { useState} from 'react';
import AddText from './components/AddText';

export default function App() {

  const [data, setData] = useState([
    {id:1,text:'shopping'},
    {id:2,text:'sleeping'},
    {id:3,text:'study'}
]);

  const changeData = (val) => {
    setData((prevData)=>{
      return [...prevData,val]
    })
  }
  const removeData = (val) => {
    setData((prevData)=>{
      return prevData.filter((item)=>{
        return item.id!=val
      })
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <AddText changeData={changeData}/>
      <List data={data} removeData={removeData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
