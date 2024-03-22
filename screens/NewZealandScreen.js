import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function NewZealandScreen() {
  const [category, setCategory] = useState("technology");
  const [Articles, setArticles]= useState(null)
  const navigation = useNavigation();
  const CategoryFind = (cat) => {
    setCategory(cat);
  };

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`https://newsapi.org/v2/top-headlines?country=nz&category=${category}&apiKey=354192c227f0409782a687e6f8e99b8b`);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const json = await response.json();
              setArticles(json?.articles)
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, [category]);

  if(Articles===null) return <Text>Loading</Text>

  return (
    <GestureHandlerRootView>
      <ScrollView>
      <View style={styles.Header}>
        <Slider CategoryFind={CategoryFind} />
      </View>
      <View style={styles.MainContainer}>
        <Image
          style={styles.MainImage}
          source={{
            uri: Articles[0].urlToImage,
          }}
        />
        <Text style={styles.MainNewText}>{Articles[0].source.name}</Text>
        <Text style={styles.MainNewAuthor}>{Articles[0].author}</Text>
        <Text style={styles.MainNewTitle}>{Articles[0].title}</Text>
        <Pressable onPress={()=> navigation.navigate("Details News",{article:Articles[0]} )}>
          <Text style={{marginBottom:8, fontWeight:'bold'}}>Read more....</Text>
        </Pressable>
      </View>
      <View style={styles.Box}>
        {Articles &&
          Articles.map((e, i) => (
            <Pressable key={i} onPress={()=> navigation.navigate("Details News", {article:e})}>
            <View key={e.title} style={styles.NewsTitles}>
              <View style={styles.NewsTitlesDesc}>
                <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{e.source.name}</Text>
                <Text>{e.title}</Text>
                <Text style={{marginTop:8, fontWeight:'bold'}}>{e.author}</Text>
              </View>
              <View style={styles.NewsTitlesImage}>
                <Image style={styles.Image} source={{ uri: e.urlToImage }} />
              </View>
            </View>
            </Pressable>
          ))}
      </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  NewsType: {
    flexDirection: "row",
  },
  Header: {
    flexDirection: "row",
  },
  MainContainer: {
    alignItems: "center",
    backgroundColor: "#ded9d9",
  },
  MainImage: {
    height: 300,
    width: "90%",
    margin: 15,
    borderRadius: 10,
  },
  MainNewText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  MainNewAuthor: {
    fontSize: 12,
    fontWeight: "bold",
  },
  MainNewTitle: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  Image: {
    width: '100%',
    height: 150,
  },
  Box:{
    backgroundColor:'#e4dddd',
  },
  NewsTitles:{
    flexDirection:'row',
    marginVertical:10,
    marginHorizontal:10,
    borderStartColor:'black',
    elevation:3
  },
  NewsTitlesDesc:{
    width:'60%',
    paddingLeft:8,
    paddingTop:5
  },
  NewsTitlesImage:{
    width:'40%',
    paddingLeft:15
  }
});
