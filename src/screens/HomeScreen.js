import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components"
        onPress={() => navigation.navigate('Components') }
      />
      <Button title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button title="Go to Color"
        onPress={() => navigation.navigate('Color')}
      />
      <Button title="Go to Square"
        onPress={() => navigation.navigate('Square')}
      />
      <Button title="Go to Inputs"
        onPress={() => navigation.navigate('Inputs')}
      />
      <Button title="Go to Box"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;