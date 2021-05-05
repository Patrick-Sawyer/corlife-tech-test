import React from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_PARTICIPANTS} from '../../data/queries';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  participantList: {
    padding: 20,
  },
  participant: {
    padding: 20,
  },
});

export const Participants = ({navigation}) => {
  const {data} = useQuery(GET_PARTICIPANTS);

  /*TODO TASK 03*/
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      {!!data && !!data.characters.results && (
        <FlatList
          style={styles.participantList}
          data={data.characters.results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            /*TODO TASK 04*/
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Participant', {data: item});
              }}
              style={styles.participant}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Participants;
