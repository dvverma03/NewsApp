import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { LoginFormValidation } from "../Utils/Validate";
import { getUser } from "../Utils/Authentication";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import LoadingOverlay from "../components/LoadingOverLay"

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creating, setCreating]= useState(false)
  const navigation = useNavigation();
  const dispatch = useDispatch();

  async function handleLoginPress() {
    const errMessage = LoginFormValidation(email, password);
    if (errMessage) {
      Alert.alert("Invalid Credentials", errMessage, [
        { text: "OK", onPress: () => console.log("OK Pressed"), style: "cancel" },
      ]);
    } else {
      try {
        setCreating(true)
        const user = await getUser(email, password);
        dispatch(addUser(user))
        setCreating(false)
      } catch (error) {
        Alert.alert("Error", "User not exist. Please fill correct data.", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        navigation.navigate('Sign in')
      }
      finally{
        setCreating(false)
      }
    }
  }

  if(creating) return <LoadingOverlay message="Login you..."/>

  return (
    <LinearGradient colors={["#90aff7", "#f48ae2"]} style={styles.gradient}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: "https://cdn-icons-png.freepik.com/256/1177/1177568.png" }}
        />
        <Text style={styles.NameContainer}>Sign In</Text>
        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            value={email}
            style={styles.NameInput}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)} 
          />
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            value={password}
            style={styles.NameInput}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.NameLoginButton} onPress={handleLoginPress}>
          <Text style={styles.NameLoginText}>Login</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", color: "white", fontSize: 15, marginVertical:10 }}>Not Registered ?</Text>
        <TouchableOpacity style={styles.NameRegisteredButton} onPress={() => navigation.replace("Sign up")}>
          <Text style={styles.NameRegisteredText}>Register</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    height: "90%",
    borderRadius: 20,
    alignItems: "center",
  },
  NameContainer: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  NameInput: {
    padding: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginVertical: 10,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 3,
    width: "90%",
    textAlign: "center",
  },
  NameLoginButton: {
    padding: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginVertical: 10,
    borderRadius: 50,
    backgroundColor: "#2E1570",
    width: "62%",
    alignItems: "center",
  },
  NameLoginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  NameRegisteredButton: {
    padding: 5,
    fontSize: 20,
    color: "#2E1570",
    fontWeight: "bold",
    borderRadius: 50,
    borderColor: "#2E1570",
    width: "60%",
    borderWidth: 3,
    alignItems: "center",
  },
  NameRegisteredText: {
    color: "#2E1570",
    fontSize: 18,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 170,
    height: 170,
  },
});
