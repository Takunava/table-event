import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../../screens/WelcomeScreen';

// @ts-ignore
const Stack = createStackNavigator();

export const WelcomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{ header: undefined }}
            />
        </Stack.Navigator>
    );
};
//@ts-ignore
