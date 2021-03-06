import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {SignIn} from '../screens/SignIn';
import {AppointmentDetails} from "../screens/AppointmentDetails";
import {AppointmentCreate} from "../screens/AppointmentCreate";
import {theme} from "../global/styles/theme";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: theme.colors.secondary100
                },

            }}
        >
            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />

            <Stack.Screen
                name="Home"
                component={Home}
            />

            <Stack.Screen
                name={"AppointmentDetails"}
                component={AppointmentDetails}
            />

            <Stack.Screen
                name={"AppointmentCreate"}
                component={AppointmentCreate}
            />

        </Stack.Navigator>
    )
}