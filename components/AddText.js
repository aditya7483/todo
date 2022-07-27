import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Button} from 'react-native';

const AddText = ({changeData}) => {

    const [text, setText] = useState('');

    const handleChange = (txt)=>{
        setText(txt);
    }

    const handlePress = ()=>{
        let newData = {id:Math.random().toString(),text:text}
        changeData(newData);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textBox}
                placeholder="Enter a new todo"
                onChangeText={(txt)=>handleChange(txt)}
                value={text}
            />
            <Button
                onPress={handlePress}
                title={"Add todo"}
                disabled={text.length<1?true:false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        marginVertical:10,
        
    },
    textBox:{
        paddingHorizontal:40,
        borderBottomWidth:1,
        marginBottom:10
    }
})

export default AddText;
