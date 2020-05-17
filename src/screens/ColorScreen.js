import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

export const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title="Add Color" onPress={() => setColors( [ ...colors, randomRgb() ])} />
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={( { item }) => {
                    return <View style={{ width: 100, height: 100, backgroundColor: item } } />
                 }}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const colorTypes = []

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;