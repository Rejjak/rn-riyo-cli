import navigationConfig from './routingConfig';
import {createStackNavigator} from 'react-navigation';
export const mainStack = createStackNavigator(
    navigationConfig.Screen.Stack,{
        headerMode:'none'
    }
);

// You can create more stack here like above based on your requirement


/** 
 * Below code is the sapmle for more customization at the time of navigation
*/

// export const Stack = createStackNavigator(
//     navigationConfig.Screen.StackTwo,
//     {
//         initialRouteName:'pageOne',
//         headerMode:'none',
//         navigationOptions:navigationConfig.navigation_options,
//         transitionConfig:navigationConfig.transition_config
//     }
// );

