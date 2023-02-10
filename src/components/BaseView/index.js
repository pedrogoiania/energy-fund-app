import React from 'react';

import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { white } from '../Colors';

const BaseView = ({
  children,
  leftButtonComponent,
  rightButtonComponent,
  centerComponent,
  footerComponent,
  scrollable,
}) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
    <View
      style={{
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingBottom: footerComponent ? 15 : 0,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
      >
        {leftButtonComponent && (
          <View style={{ flex: 1 }}>{leftButtonComponent}</View>
        )}

        <View style={{ flex: 8, alignItems: 'center' }}>
          {centerComponent && centerComponent}
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          {rightButtonComponent && rightButtonComponent}
        </View>
      </View>
      {footerComponent && (
        <View style={{ paddingHorizontal: 20, justifyContent: 'center' }}>
          {footerComponent}
        </View>
      )}
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
