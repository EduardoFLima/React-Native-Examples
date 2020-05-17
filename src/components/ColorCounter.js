import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ImageDetail = ({ color, current, increase, decrease }) => {
    return (
        <View>
            <Text style={styles.textStyle} >{color} - {current}</Text>
            <Button title={`more ${color}`} onPress={() => increase()} />
            <Button title={`less ${color}`} onPress={() => decrease()} />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default ImageDetail;