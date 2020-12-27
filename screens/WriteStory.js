import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStory extends React.Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Story Hub', style: { color: '#fff'  }  }}
        />
        <TextInput style={styles.titleInput} placeholder='Enter your story title' />      
        <TextInput style={styles.authorInput} placeholder='Enter the author name' />
        <TextInput style={styles.storyInput} placeholder='Write your story here' multiline />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleInput: {
    height: 50,
    marginHorizontal: 25,
    marginVertical: 20,
    marginTop: 60,
    paddingLeft: 7,
    borderWidth: 1.2,
    borderRadius: 6
  },
  authorInput: {
    height: 50,
    marginHorizontal: 25,
    marginVertical: 40,
    paddingLeft: 7,
    borderWidth: 1.2,
    borderRadius: 6
  },
  storyInput: {
    height: 340,
    marginHorizontal: 25,
    marginVertical: 20,
    paddingLeft: 7,
    borderWidth: 1.2,
    borderRadius: 6
  },
})
