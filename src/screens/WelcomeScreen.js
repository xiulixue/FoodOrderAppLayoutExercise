import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import logo from "../../assets/logo.png";
import { colors, hr80 } from "../globals/style";
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {

  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/pattern.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bean Scene Restaurant</Text>
        <View style={styles.logoout}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.btnout}>
          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
          >
            <Text style={styles.btn}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background:{
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: "gold",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "200",
  },
  text: {
    fontSize: 18,
    width: "80%",
    textAlign: "center",
    color: colors.col1,
  },
  logo: {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
  },
  logoout: {
    width: "40%",
    aspectRatio: 1, 
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:'center',
    borderRadius: "50%",
  },
  btnout: {
    flexDirection: "row",
  },
  btn: {
    fontSize: 20,
    color: 'white',
    display: "flex",
    justifyContent: "center",
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: "700",
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;
