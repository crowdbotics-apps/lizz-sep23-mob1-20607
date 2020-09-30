import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2117999Navigator from '../features/BlankScreen2117999/navigator';
import BlankScreen1106827Navigator from '../features/BlankScreen1106827/navigator';
import BlankScreen0106826Navigator from '../features/BlankScreen0106826/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2117999: { screen: BlankScreen2117999Navigator },
BlankScreen1106827: { screen: BlankScreen1106827Navigator },
BlankScreen0106826: { screen: BlankScreen0106826Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
