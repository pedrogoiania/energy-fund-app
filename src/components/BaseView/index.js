import React from 'react';

import { View, Text, SafeAreaView } from 'react-native';

const BaseView = ({ children }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{
      flexDirection: 'row',
      height: 55,
      borderBottomColor: '#f4f4f4',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      justifyContent: 'space-between',
    }}
    >

      <View><Text>left</Text></View>
      <View><Text>header</Text></View>
      <View><Text>right</Text></View>

    </View>
    <View style={{ flex: 1, padding: 20 }}>
      {children}
    </View>
  </SafeAreaView>
);

export default BaseView;
