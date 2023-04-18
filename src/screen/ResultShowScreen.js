import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    console.log(id)
  return (
    <View>
      <Text>Result Show Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultShowScreen;
