/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const Chart = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="24px" color="#29272A" fontWeight="600" marginTop="30px">
        Chart
      </Text>
      <View flexDirection="row" marginTop="36px">
        <View
          style={{
            height: 62,
            width: 150,
            borderRadius: 15,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#F1F1F1',
            marginRight: 15,
          }}>
          <Image
            style={{marginLeft: 10}}
            source={require('../assets/images/flagImg.png')}
          />
          <Text fontWeight="bold" paddingLeft="10px" paddingRight="10px">
            USD
          </Text>
          <Image source={require('../assets/icons/arrowIcon.png')} />
        </View>
        <View
          style={{
            height: 62,
            width: 150,
            borderRadius: 15,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#F1F1F1',
          }}>
          <Image
            style={{marginLeft: 10}}
            source={require('../assets/icons/convertedCountryIcon.png')}
          />
          <Text fontWeight="bold" paddingLeft="10px" paddingRight="10px">
            BDT
          </Text>
          <Image source={require('../assets/icons/arrowIcon.png')} />
        </View>
      </View>
      <View
        width="314px"
        height="77px"
        backgroundColor="#D5FEAF"
        borderRadius="15px"
        marginTop="20px"
        justifyContent="center"
        alignItems="center">
        <Text fontSize="20px" fontWeight="bold">
          1 USD = 84.09 TK
        </Text>
        <Text fontSize="12px" marginTop="2px">
          -0.0075 past month
        </Text>
      </View>

      <View marginTop="43px">
        <LineChart
          data={{
            labels: ['1D', '1W', '1M', '3M', '1Y', '3Y'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={300}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: 'white',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '1',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
