import {mainStack} from './stack';
import {createSwitchNavigator} from 'react-navigation';

export const SwitchStack = createSwitchNavigator({
    mainStack:{
        screen:mainStack
    }
});