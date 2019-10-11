import { AppRegistry } from 'react-native';
import App from './App';


console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
 
console.disableYellowBox = true

AppRegistry.registerComponent('ses2b_helps_app', () => App);
