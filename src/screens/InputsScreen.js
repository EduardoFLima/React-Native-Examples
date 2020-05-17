import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const INITIAL_STATE = { name: '', password: '' };

const NameScreen = () => {
    const [name, setName] = useState(INITIAL_STATE.name);
    const [password, setPassword] = useState(INITIAL_STATE.password);

    const errorMessage = validatePassword(password);

    return (
        <View>
            <Text>Type your name:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)} />
            <Text>Your name is {name} </Text>
            <Text>Type your password:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)} />
            { errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>

    );

};

const validatePassword = (password) => {
    if (!!password && password.length < 4){
        return 'Your password must have at least 4 characters';
    }

    return '';
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
    }

});


export default NameScreen;