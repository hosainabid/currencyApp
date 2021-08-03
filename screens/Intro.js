import {View, Image, Text, Button} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const Intro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text marginTop={70} color="#29272A" fontSize="35px" fontWeight="bold">
        Convertio.
      </Text>
      <Text fontWeight="500" fontSize="16px" marginTop={2} color="#29272A">
        Convert your currency now!
      </Text>
      <Image
        alt="Intro Page Image"
        source={require('../assets/images/intro.png')}
      />
      <Text
        fontSize="18px"
        lineHeight="24px"
        textAlign="center"
        color="#838383"
        paddingLeft={66}
        paddingRight={44}>
        Convert your Currency into more than 130+ countries currency.
      </Text>
      <Text
        fontSize="18px"
        lineHeight="24px"
        textAlign="center"
        color="#838383">
        Convert now!
      </Text>

      <Button
        width="110px"
        height="68px"
        borderRadius="10px"
        backgroundColor="#29272A"
        marginTop="49px">
        Start
      </Button>
    </View>
  );
};
export default Intro;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
