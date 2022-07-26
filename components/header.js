import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.center}>MY TODOS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        padding:30,
        backgroundColor:'orange'
    },
    center:{
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default Header;
