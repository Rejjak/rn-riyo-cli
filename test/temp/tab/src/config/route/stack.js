import navigationConfig from './routingConfig';
import {createStackNavigator} from 'react-navigation';
export const beforeStack = createStackNavigator(
    navigationConfig.Screen.StackOne,{
        headerMode:'none'
    }
);

export const afterStack = createStackNavigator(
    navigationConfig.Screen.StackTwo,{
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

