import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from '../../screens/home/homeScreen';
import AboutScreen from '../../screens/about/aboutScreen';
import ProfileScreen from '../../screens/profile/profileScreen';
import SettingScreen from '../../screens/setting/settingScreen';
const navigationConfig = Object.create(null);

navigationConfig.Screen = {
    Stack:{
        pageOne:{
            screen: HomeScreen,
            navigationOptions:{
                title:'Home Page'
            }
        },
        pageTwo:{
            screen: AboutScreen,
            navigationOptions:{
                title:'About Page'
            }
        },
        pageThree:{
            screen: ProfileScreen,
            navigationOptions:{
                title:'Profile Page'
            }
        },
        pageFour:{
            screen: SettingScreen,
            navigationOptions:{
                title:'Setting Page'
            }
        }
    }
};

export default navigationConfig;