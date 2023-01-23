import { useEffect, useState } from "react";
import { Image, ImageBackground, Text, View, TouchableOpacity,ActivityIndicator } from "react-native";
import tw from "tailwind-react-native-classnames";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RoundedButton from "../components/button/RoundedButton";
import { color_asset } from "../components/utilitiyFunctions";

import bg_image from '../images/bgimage.png'

const AppWelcomeScreen = ({ navigation }) => {

  const [isRegister,setIsRegistered] = useState('false');
  const [timeout,setIsTimeout] = useState(false)
  
  async function getIsReg() {
    const item = await AsyncStorage.getItem('isRegistered')
      if(item !== null){
        setIsRegistered('true')
      }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getIsReg()
    })
    return unsubscribe;
  },[])

  const Load = () => {
    setTimeout(() => {
      setIsTimeout(true)
      return(
        <ActivityIndicator />
      )

    }, 500)
  }
  return (
    <View style={tw`flex-1`}>
        <View style={[tw`h-1/2 flex-auto flex-col justify-center mb-5`]}>
          <Image
            style={tw`mt-auto mx-auto w-1/4 h-3/6`}
            source={require("../images/Logo/NIMNIcon.png")}
            resizeMode='contain'
            resizeMethod='scale'
          />
          {/* <Text style={[tw`text-2xl mt-4`,{color: "#000",textAlign:'center'}]}>Lagos Chapter</Text> */}
        </View>
        
        <View style={tw`flex-col h-1/2 justify-start px-4 pt-10`}>
              {!timeout ? <Load /> : <View style={tw`flex-row ${isRegister === 'false' ? 'justify-between' : 'mx-auto' } pt-8 px-8 mb-7`}>
                <RoundedButton
                  text="Login"
                  style={[tw`py-2.5 px-10`,{borderRadius: 15}]}
                  rounded=''
                  textStyle={tw`text-sm font-semibold`}
                  pressed={() => navigation.navigate("login")}
                />
                {isRegister === 'false' ? <RoundedButton
                  text="Verify"
                  borderWidth={2}
                  borderColor={color_asset.secondary.background}
                  bgColor="transparent"
                  style={[tw`py-2.5 px-10`,{borderRadius: 15}]}
                  rounded=''
                  textStyle={tw`text-sm font-semibold`}
                  textColor={color_asset.secondary.background}
                  pressed={() => navigation.navigate("verification")}
                /> : null}
              </View>}
              <View style={tw`flex-row mx-auto py-2`}>
            <Text>Don't have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("register")}>
              <Text style={[tw`font-bold`,{color: `${color_asset.primary.background}`}]}> Sign up</Text>
            </TouchableOpacity>
        </View>
          </View>
    </View>
  );
};

export default AppWelcomeScreen;
