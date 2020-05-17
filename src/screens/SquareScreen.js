import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const CHANGE_RED = 'CHANGE_RED';
const CHANGE_GREEN = 'CHANGE_GREEN';
const CHANGE_BLUE = 'CHANGE_BLUE';

const INITIAL_STATE = { red: 0, green: 0, blue: 0 };

const reducer = (state, action) => {

    switch (action.type) {
        case CHANGE_RED:
            return state.red + action.increment > 255 || state.red + action.increment < 0 ?
                state :
                { ...state, red: state.red + action.increment };
        case CHANGE_GREEN:
            return state.green + action.increment > 255 || state.green + action.increment < 0 ?
                state :
                { ...state, green: state.green + action.increment };
        case CHANGE_BLUE:
            return state.blue + action.increment > 255 || state.blue + action.increment < 0 ?
                state :
                { ...state, blue: state.blue + action.increment };
        default:
            return state;
    };
};

export const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <View>
            <ColorCounter color="Red" current={state.red} increase={() => dispatch({ type: CHANGE_RED, increment: COLOR_INCREMENT })} decrease={() => dispatch({ type: CHANGE_RED, increment: -COLOR_INCREMENT })} />
            <ColorCounter color="Green" current={state.green} increase={() => dispatch({ type: CHANGE_GREEN, increment: COLOR_INCREMENT })} decrease={() => dispatch({ type: CHANGE_GREEN, increment: -COLOR_INCREMENT })} />
            <ColorCounter color="Blue" current={state.blue} increase={() => dispatch({ type: CHANGE_BLUE, increment: COLOR_INCREMENT })} decrease={() => dispatch({ type: CHANGE_BLUE, increment: -COLOR_INCREMENT })} />
            <View style={{ width: 100, height: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
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

export default SquareScreen;