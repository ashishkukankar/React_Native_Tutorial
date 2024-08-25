import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const Detail = () => {
  const route = useRoute();
  const image = route.params.image;
  const instruction = route.params.instruction;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Image
          style={{ height: 400,
             width: "90%",
              alignSelf: 'center'
             }}
          source={{ uri: image }} />
        <View
          style={{ marginTop: 20,
           marginHorizontal: 10
            }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 10,
              fontWeight: 'bold'
            }}
          >Instruction</Text>
          <Text
            style={{ fontSize: 15 }}
          >{instruction}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Detail