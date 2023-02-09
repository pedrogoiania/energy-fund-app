import React, { useState } from 'react';

import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';

import Icons from '../../assets/icons';

const Input = ({
  title, placeholder, value, onChangeText, secureTextEntry,
}) => {
  const [showEntry, setShowEntry] = useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      {title && <Text style={{ fontSize: 11, color: '#A0A0A0' }}>{title}</Text>}
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          backgroundColor: '#F4F4F4',
          // backgroundColor: '#A0A0A0',
          height: 48,
          alignItems: 'center',
          borderRadius: 4,
          justifyContent: 'space-around',
        }}
      >
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType="email-address"
          secureTextEntry={secureTextEntry && !showEntry}
          style={{ width: '100%', height: 48 }}
        />
        {secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setShowEntry(!showEntry);
            }}
          >
            <Icons.EyeIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
