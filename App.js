import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import StackNavigation from './StackNavigation.js';
// import NewChat from './screens/NewChat.js';

const App = () => {

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
export default App;
