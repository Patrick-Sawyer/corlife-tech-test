import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    padding: 20,
  },
  rightAlign: {
    textAlign: 'right',
  },
});

export const Participant = ({route}) => {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text>Name: </Text>
        <Text>{data.name}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.rightAlign}>Gender: </Text>
        <Text style={styles.rightAlign}>{data.gender}</Text>
      </View>
    </View>
  );
};

export default Participant;
