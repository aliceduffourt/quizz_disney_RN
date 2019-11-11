import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import Game_init from './game_init';


export  class Result_screen extends Component {


  static navigationOptions = {
          header: null
      }

  _onAcceptButton = () => {

    //  Navigate to the Themes list
    this.props.navigation.navigate(
      'Themes_list_screen'
    );

  }

  render() {

    const theme = Game_init.get_actual_theme();
    const correctCount = Game_init.nb_correct_answers();
    const wrongCount = Game_init.get_quizz().length - correctCount;

    return (
      <View style={styles.container}>

        <ImageBackground
         style = {styles.imageBackground}
         source = {require('../../assets/images/bg.png')}
         resizeMode = "cover"
        >

          <View style={styles.headerContainer}>
            <Text style = {styles.headerTitle}>Resultats</Text>
          </View>

          <View style={styles.themeDataContainer}>

            <View style={[{backgroundColor: theme.color},styles.themeData]}>

              <Text style = {styles.themeName}>{theme.name}</Text>

              <View style={styles.themeResultsContainer}>

                <View style={styles.themeResultsCorrectContainer}>
                  <Image style={styles.themeResultsCorrectImage}
                  source={require('../../assets/images/right.png')}
                  />
                  <Text style = {styles.themeResultsCorrectCount}>{correctCount}</Text>
                </View>

                <View style={styles.themeResultsWrongContainer}>
                  <Image style={styles.themeResultsWrongImage}
                  source={require('../../assets/images/wrong.png')}
                  />
                  <Text style = {styles.themeResultsWrongCount}>{wrongCount}</Text>
                </View>

              </View>

            </View>

          </View>

          <View style={styles.actionsContainer}>

            <TouchableOpacity onPress={this._onAcceptButton}>
              <Image
                style={styles.acceptButton}
                source={require('../../assets/images/arrow.png')}
              />
            </TouchableOpacity>

          </View>

        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },

  themeDataContainer : {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  
  },

  themeData: {

    alignSelf: 'stretch',

    padding: 24,

    margin : 40,
    height :320,

    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ffffff',
  },

  themeName: {
    color: '#000000',

    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 24,

    textShadowColor:'#ffffff',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:0,
  },

  themeDescription : {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },

  imageBackground : {
    flex: 1,
    height: '100%',
    width: '100%',

    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  themeInstructions : {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  actionsContainer : {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor : '#f4e842',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#f4bc42',
    margin : 8,

  },

  actionSeparator : {
    width : 16,
  },

  cancelButton : {
    width: 56,
    height: 56,
  },

  acceptButton : {
    width: 56,
    height: 56,
  },

  headerContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor : '#00BCD4',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ffffff',
    margin : 8,
    marginTop : 36,
  },

  headerTitle : {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',

  },

  themeResultsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight: 20,
    paddingBottom: 10,
  },

  themeResultsCorrectContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  themeResultsCorrectImage: {
    width: 64,
    height: 64,
  },
  themeResultsCorrectCount: {
    marginTop: 12,
    fontSize: 64,
    fontWeight: '900',
    textAlign: 'center',

    textShadowColor:'#ffffff',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:0,
  },

  themeResultsWrongContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  themeResultsWrongImage: {
    width: 64,
    height: 64,
  },
  themeResultsWrongCount: {
    marginTop: 12,
    fontSize: 64,
    fontWeight: '900',
    textAlign: 'center',

    textShadowColor:'#ffffff',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:0,
  },

});