import React from 'react';

import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const BaseView = ({
  children,
  leftButtonComponent,
  rightButtonComponent,
  centerComponent,
  scrollable,
}) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        flexDirection: 'row',
        height: 55,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}
    >
      {leftButtonComponent && (
        <View style={{ flex: 1 }}>{leftButtonComponent}</View>
      )}
      {rightButtonComponent && (
        <View
          style={{
            flex: 8,
          }}
        >
          {rightButtonComponent}
        </View>
      )}
      {centerComponent && <View style={{ flex: 1 }}>{centerComponent}</View>}
    </View>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {scrollable ? (
        <ScrollView style={{ flex: 1, padding: 20 }}>{children}</ScrollView>
      ) : (
        <View style={{ flex: 1, padding: 20 }}>{children}</View>
      )}
    </KeyboardAvoidingView>
  </SafeAreaView>
);

export default BaseView;
