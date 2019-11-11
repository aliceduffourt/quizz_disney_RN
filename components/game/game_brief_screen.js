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


export class Game_brief_screen extends Component {


  static navigationOptions = {
          header: null
      }


  _onCancelButton = () => {
    this.props.navigation.goBack();
  }

  _onAcceptButton = () => {

    //  Create quiz List
    Game_init.set_genarate_quizz();

    //  Navigate to the first quiz
    this.props.navigation.navigate(
      'Quizz_screen'
    );

  }

  render() {

    const theme = Game_init.get_actual_theme();

    return (
      <View style={styles.container}>

        <ImageBackground
         style = {styles.imageBackground}
         source = {require('../../assets/images/bg.png')}
         resizeMode = "cover"
        >

          <View style={styles.headerContainer}>
            <Text style = {styles.headerTitle}>Commencer le jeu ?</Text>
          </View>

          <View style={styles.themeDataContainer}>

            <View style={[{backgroundColor: theme.color},styles.themeData]}>

              <Text style = {styles.themeName}>{theme.name}</Text>
              <Text style = {styles.themeDescription}>{theme.description}</Text>

            </View>

          </View>

          <View style={styles.actionsContainer}>

            <TouchableOpacity onPress={this._onCancelButton}>
              <Image
                style={styles.cancelButton}
                source={require('../../assets/images/reverse_arrow.png')}
              />
            </TouchableOpacity>

            <View style={styles.actionSeparator} />

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
    backgroundColor: 'rgb(230, 206, 144)',
  },

  themeDataContainer : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  themeData: {
    flex: 1,

    alignSelf: 'stretch',
    alignContent: 'center',

    padding: 24,

    margin : 16,
    marginTop : 32,
    marginBottom : 32,

    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ffffff',
  },


  themeName: {
    color: '#000000',

    fontSize: 32,
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
    fontWeight: '300',
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',

  },

});
