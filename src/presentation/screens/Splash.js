import React, {useEffect} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import {useQuery} from '@apollo/client';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GET_PARTICIPANTS} from '../../data/queries';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth / 2,
    height: screenWidth / 2,
  },
});

export const Splash = () => {
  const {data} = useQuery(GET_PARTICIPANTS);
  const navigation = useNavigation();

  useEffect(() => {
    if (data && data.characters) {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Participants'}],
          }),
        );
      }, 2000);
    }
  }, [navigation, data]);

  /*TODO TASK 02*/
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={require('../../../assets/images/splash.png')}
      />
    </SafeAreaView>
  );
};

export default Splash;
