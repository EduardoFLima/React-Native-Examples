import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.viewStyle} >
                <Text style={{ ...styles.text, ...styles.text1 }} >CHILD 1</Text>
                <Text style={{ ...styles.text, ...styles.text2 }} >CHILD 2</Text>
                <Text style={{ ...styles.text, ...styles.text3 }} >CHILD 3</Text>
            </View>
            <View style={styles.viewMainBox}>
                <View style={{...styles.viewBox, ...styles.viewBox1}} />
                <View style={{...styles.viewBox, ...styles.viewBox2}} />
                <View style={{...styles.viewBox, ...styles.viewBox3}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 2,
        height: 200,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    text: {
        borderColor: 'red',
        borderWidth: 2,
    },
    text1: {
        flex: 1
    },
    text2: {
        flex: 1
    },
    text3: {
        flex: 1
    },
    viewMainBox: {
        borderColor: 'black',
        borderWidth: 2,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewBox: {
        width: 50,
        height: 50,
    },
    viewBox1:{
        backgroundColor: 'orangered'
    },
    viewBox2:{
        backgroundColor: 'lightgreen',
        bottom:100,
        alignSelf: 'flex-end'
    },
    viewBox3:{
        backgroundColor: 'mediumpurple'
    }
});

export default BoxScreen;