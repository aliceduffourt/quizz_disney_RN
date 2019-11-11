/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Themes_list_screen } from './components/game/themes_list_screen';
import { createAppContainer } from 'react-navigation';
import { Result_screen } from './components/game/result_screen';
import { Game_brief_screen } from './components/game/game_brief_screen';
import { Quizz_screen } from './components/quizz/quizz_screen';


const App = createAppContainer(createStackNavigator ({
  Themes_list_screen: {screen: Themes_list_screen},
  Quizz_screen: {screen: Quizz_screen},
  Game_brief_screen: {screen: Game_brief_screen},
  Result_screen: {screen: Result_screen},
},

{
  initialRouteName: 'Themes_list_screen',
}));

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
