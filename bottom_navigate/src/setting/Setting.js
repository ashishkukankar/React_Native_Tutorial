import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Setting = () => {
 const [username,setUsername] = useState('')
 const [password,setPassword] = useState('')
  return (
    <View style={style.container}>
      <Text style={style.text}>UserName</Text>
      <TextInput
      style={style.input}
      onChangeText={setUsername}
      value={username}
      />
       <Text style={style.text}>password</Text>
      <TextInput
      style={style.input}
      onChangeText={setPassword}
      value={password}
      />
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Submit it</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text:{
    margin: 5,
    fontSize:16,
    fontWeight:'bold',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal:10,
    marginTop:20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  buttonText:{
    color:'white',
    fontSize:14,
    fontWeight:'bold'
  }
})

export default Setting