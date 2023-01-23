import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { color_asset } from '../utilitiyFunctions'

const TabbedButton = (props) => {
  return (
    <TouchableOpacity 
        style={props.index==props.selected ? [tw`py-1 my-2 px-5 rounded-3xl`,{backgroundColor: color_asset.tertiary.background}] : tw` py-2.5 my-2 rounded-3xl`} 
        onPress={props.pressed}
    >
      <Text style={props.index==props.selected ? tw`text-white text-center my-auto` : [tw`font-bold text-center my-auto`,{color:'#365C2A'}]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default TabbedButton