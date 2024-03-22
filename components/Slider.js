import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function Slider({CategoryFind}) {
    const [active, setActive]= useState(1)
    
    const SliderItem=[
        {
            id:1,
            name:'technology'
        },
        {
            id:2,
            name:'science'
        },
        {
            id:3,
            name:'general'
        },
        {
            id:4,
            name:'sports'
        },
        {
            id:5,
            name:'health'
        },
        {
            id:6,
            name:'entertainment'
        },
        {
            id:7,
            name:'business'
        },

    ]

    const setActiveItem=(index, name)=>{
        setActive(index)
        CategoryFind(name)
    }

  return (
    <>
    <FlatList
    data={SliderItem}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item)=> item.id}
    renderItem={(e)=> 
    (
        <TouchableOpacity onPress={()=> setActiveItem(e.item.id, e.item.name)}>
            <Text  style={e.item.id === active ?styles.SelectedHeader:styles.UnselectedHeader}>{e.item.name}</Text>
        </TouchableOpacity>
    )}
    />
    </>
  )
}

const styles = StyleSheet.create({
    
    UnselectedHeader:{
        marginHorizontal:20,
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        color:'#4b4949'
    },
    SelectedHeader:{
        marginHorizontal:20,
        fontSize:20,
        fontWeight:'bold',
        margin:10,
        color:'#096ced'
    }
})