import {View,Button,Image,Text,Pressable} from "react-native";
const LogoImg = require("./assets/favicon.png");
export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"plum",padding:60}}>
      <Image source={LogoImg} style={{width: 100, height: 100}} />
      <Button title="Press" onPress={() => console.log("Button pressed")}
        color="midnightblue"
        disabled/>
    </View>
  );
}


