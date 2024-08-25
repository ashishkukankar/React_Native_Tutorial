import { View, Text, FlatList, Image,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../api_response/Api'


function HomeScreen({navigation}) {
  const [value,setValues] = useState([])
  useEffect(()=>{
    apiData()
  },[])

  const apiData = async() => {
    const apidata =await fetchApi();
    setValues(apidata.data.recipes)
  }

  const onCardClick =(item)=>{
    navigation.navigate("Detail",{
      image: item.item.image,
      instruction: item.item.instructions
    })
  }

  const foodItem = (item) => {
    console.log(item)
    return (
      <View style={style.container}>
        <TouchableOpacity
        onPress={()=>onCardClick(item)}>
        <View style={style.cardContainer}>
          <Image
          style={{height:50,width:50, marginLeft:5}}
            source={{uri:item.item.image}}
          />
          <View>
            <View style={style.text}>
            <Text>{item.item.name}</Text>
            <Text>{item.item.cuisine}</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <FlatList
      data={value}
      renderItem={(item)=>foodItem(item)}
      keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1, 
    marginHorizontal:10,
    backgroundColor: '#ecf0f1',
    padding: 2,
  },
  cardContainer: {
    flexDirection: 'row',
    margin:5 ,
    paddingTop: 20,
    paddingBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { x: 0, y: 10 },
    shadowOpacity: 1,
    borderLeftColor: 'blue',
    borderLeftWidth: 5,
    backgroundColor: 'white',
  },
  text:{
    marginLeft:5
  }
})

export default HomeScreen