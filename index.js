/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import RootNavigation from './app/components/navigation/RootNavigation';

AppRegistry.registerComponent(appName, () => RootNavigation);
