import { StyleSheet } from 'react-native';

import { white } from '../Colors';

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    backgroundColor: '#770FDF',
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: white,
    fontSize: 16,
  },
});

export default styles;
