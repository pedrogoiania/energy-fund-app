import React from 'react';
import 'react-native-gesture-handler';

import Navigation from './navigation';

import Contexts from './contexts';

const App = () => (
  <Contexts>
    <Navigation />
  </Contexts>
);
export default App;
