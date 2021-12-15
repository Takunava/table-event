import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { WelcomeStack } from './Stacks/WelcomeStack';

const App = () => {
    return (
        <NavigationContainer>
            <WelcomeStack />
        </NavigationContainer>
    );
};

export default App;
