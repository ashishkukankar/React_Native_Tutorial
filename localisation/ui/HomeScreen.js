import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next'
import i18n from "../translation/i18n";

const HomeScreen = () => {
    const { t } = useTranslation();


    const setEnglishLang = () => {
        const newlanguage = 'en'
        i18n.changeLanguage(newlanguage)
    }

    const setSpanishLang = () => {
        const newlanguage = 'es'
        i18n.changeLanguage(newlanguage)
    }

    return (
        <View style={Style.container}>
            <Text style={Style.statement}>{t("homeScreen")}</Text>
            <View style={Style.buttonContainer}>
            <TouchableOpacity
             style={Style.button}
                onPress={setEnglishLang}
            >
                <Text style={Style.buttonText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Style.button}
                onPress={setSpanishLang}
            >
                <Text style={Style.buttonText}>Spanish</Text>
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

export default HomeScreen;