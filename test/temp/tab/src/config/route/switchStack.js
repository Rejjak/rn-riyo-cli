import {beforeStack,afterStack} from './stack';
import {createSwitchNavigator} from 'react-navigation';

export const SwitchStack = createSwitchNavigator({
    beforeStack:{
        screen:beforeStack
    },
    afterStack:{
        screen:afterStack
    }
},{initialRouteName:'beforeStack'});