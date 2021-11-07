import 'react-native-gesture-handler';
import React from 'react';
import GlobalProvider from './src/context/Provider';
import Navigator from './src/navigation/Navigator';
const App = () => {
  return (
    <GlobalProvider children={undefined}>
      <Navigator />
    </GlobalProvider>
  );
};

export default App;
