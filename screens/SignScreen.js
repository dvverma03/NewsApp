import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import { useNavigation } from "@react-navigation/native";
  import { SignupFormValidation } from "../Utils/Validate.js";
  import { CreateUser } from "../Utils/Authentication";
  import LoadingOverlay from "../components/LoadingOverLay.js";
  import { useDispatch } from "react-redux";
  import { addUser } from "../store/userSlice";
  
  export default function SignupScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const [creating, setCreating] = useState(false);
    const dispatch = useDispatch()
    
    async function SignUpUser() {
      const errMessage = SignupFormValidation(email, password);
  
      if (errMessage) {
        Alert.alert("Invalid Credentials", errMessage, [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "cancel",
          },
        ]);
      } else {
        setCreating(true);
        try {
          const user = await CreateUser(email, password);
          dispatch(addUser(user))
        } catch (error) {
          Alert.alert("Error", "Invalid credential. Please try again later.", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } finally {
          setCreating(false);
        }
      }
    }
  
    if(creating) return <LoadingOverlay message="Sign in you"/>
  
    return (
      <LinearGradient colors={["#90aff7", "#f48ae2"]} style={styles.gradient}>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://cdn-icons-png.freepik.com/256/1177/1177568.png",
            }}
          />
          <Text style={styles.NameContainer}>Sign Up</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={name}
              style={styles.NameInput}
              onChangeText={setName}
              placeholder="Name"
            />
            <TextInput
              value={email}
              style={styles.NameInput}
              onChangeText={setEmail}
              placeholder="Email"
            />
            <TextInput
              value={password}
              style={styles.NameInput}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.NameLoginButton}
              onPress={SignUpUser}
            >
              <Text style={styles.NameLoginText}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.alreadyRegisteredText}>Already Registered ?</Text>
            <TouchableOpacity
              style={styles.NameRegisteredButton}
              onPress={() => navigation.replace("Sign in")}
            >
              <Text style={styles.NameRegisteredText}>Login</Text>
            </TouchableOpacity>
          </View>
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
    inputContainer: {
      width: "100%",
      alignItems: "center",
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
    alreadyRegisteredText: {
      textAlign: "center",
      color: "white",
      fontSize: 15,
      marginVertical: 10,
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
  