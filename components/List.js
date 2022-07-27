import React from 'react';
import {View, StyleSheet,Text,ScrollView} from 'react-native';

const List = ({data,removeData}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
            {data.map((item)=>{
                return <Text onPress={()=>removeData(item.id)} style={styles.items} key={item.id}>{item.text}</Text>
            })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderColor:'black',
        borderWidth:2,
        flex:1,
        justifyContent:'center',
        marginHorizontal:30
    },
    items:{
        padding:20,
        paddingHorizontal:50,
        backgroundColor:'gray',
        marginVertical:5
    }
})

export default List;
