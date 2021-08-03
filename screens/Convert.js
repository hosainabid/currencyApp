/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'native-base';
import {Image, TouchableHighlight} from 'react-native';

const Convert = () => {
  const onPressButton = () => {
    alert('You tapped the button!');
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text fontSize="24px" color="#29272A" fontWeight="600" marginTop="50px">
        Convertio.
      </Text>
      <View flexDirection="row" marginTop="36px">
        <View
          style={{
            height: 90,
            width: 231,
            borderRadius: 15,
            backgroundColor: '#F1F1F1',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{marginLeft: 10}}
            source={require('../assets/images/flagImg.png')}
          />
          <Text fontWeight="bold" paddingLeft="10px" paddingRight="10px">
            USD
          </Text>
          <Image source={require('../assets/icons/arrowIcon.png')} />
          <Text fontWeight="bold" marginLeft="auto" paddingRight="15px">
            $156.00
          </Text>
          {/* <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
          </Picker> */}
        </View>
        <TouchableHighlight onPress={onPressButton}>
          <View
            style={{
              marginLeft: 10,
              height: 90,
              width: 74,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#F1F1F1',
              borderWidth: 1,
            }}>
            <Image source={require('../assets/icons/calculatorIcon.png')} />
          </View>
        </TouchableHighlight>
      </View>

      <TouchableHighlight styles={{paddingTop: 10}} onPress={onPressButton}>
        <View
          style={{
            flexDirection: 'row',
            width: 225,
            height: 58,
            borderRadius: 15,
            paddingTop: 16,
            paddingRight: 32,
            paddingBottom: 16,
            paddingLeft: 32,
            borderWidth: 1,
            borderColor: '#F1F1F1',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <Image source={require('../assets/icons/convertedArrowIcon.png')} />
          <Text fontWeight="bold" paddingLeft="10px">
            1 USD = 84.09 TK
          </Text>
        </View>
      </TouchableHighlight>

      <View
        style={{
          height: 90,
          width: 315,
          borderRadius: 15,
          backgroundColor: '#F1F1F1',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 36,
        }}>
        <Image
          style={{marginLeft: 10}}
          source={require('../assets/icons/convertedCountryIcon.png')}
        />
        <Text fontWeight="bold" paddingLeft="10px" paddingRight="10px">
          BDT
        </Text>
        <Image source={require('../assets/icons/arrowIcon.png')} />
        <Text fontWeight="bold" marginLeft="auto" paddingRight="15px">
          ৳11,263.00
        </Text>
      </View>
    </View>
  );
};

export default Convert;
