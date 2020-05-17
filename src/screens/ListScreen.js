import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
    const list = [
        { name: 'Friend 1', age: 20 },
        { name: 'Friend 2', age: 45 },
        { name: 'Friend 3', age: 32 },
        { name: 'Friend 4', age: 27 },
        { name: 'Friend 5', age: 56 },
        { name: 'Friend 6', age: 31 },
        { name: 'Friend 7', age: 30 }
    ];

    return (
        <FlatList
            vertical
            keyExtractor={(friend) => friend.name }
            data={list}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle} >{`${item.name} - Age ${item.age}`}</Text>
            }}
        />        
    );

};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;