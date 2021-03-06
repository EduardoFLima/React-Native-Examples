import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text style={styles.textStyle} >{title}</Text>
            <Text style={styles.textStyle} >Image score - {score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default ImageDetail;