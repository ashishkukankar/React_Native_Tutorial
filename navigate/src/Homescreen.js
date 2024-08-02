import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    //navigation.navigate('Profile')
    //navigation.push('Profile')
    //navigation.pop()
    return (
        <View style={Style.container}>
            <Text style={Style.statement}>homeScreen</Text>
            <View style={Style.buttonContainer}>
            <TouchableOpacity
             style={Style.button}
             onPress={()=> navigation.push('Homescreen')}
            >
            <Text style={Style.buttonText}>Click</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={Style.button}
             onPress={()=> navigation.pop()}
            >
            <Text style={Style.buttonText}>Back</Text>
            </TouchableOpacity>
           </View>
        </View>
    )
}
const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
        width:'80%',
        flexDirection:'row',
        marginTop:20
    },
    button:{
        flex:1,
        height:40,
        backgroundColor: 'blue',
         alignItems: 'center', 
        justifyContent: 'center',
         borderRadius: 15,
         marginEnd:10
        },
    buttonText:{
        alignSelf:'center',
        color:'white'
    },
    statement:{
        color:'black',
        fontSize:20
    }
})

export default HomeScreen

