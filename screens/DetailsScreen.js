import { ScrollView, StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import LoadingOverlay from '../components/LoadingOverLay';

export default function DetailsScreen(props) {
  const Article = props.route.params.article;
  const navigation = useNavigation();

  const onPressReadMore = () => {
    Linking.openURL(Article.url);
  };

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.MainContainer}>
          {Article.urlToImage ? <Image
          style={styles.MainImage}
          source={{
            uri: Article.urlToImage,
          }}
        />: <LoadingOverlay  />}
          <Text style={styles.MainNewText}>{Article.source.name}</Text>
          <Text style={styles.MainNewAuthor}> {Article.author}</Text>
          <Text style={styles.MainNewDate}> Published Date: {Article.publishedAt.slice(0, 10)}</Text>
          <Text style={styles.MainNewTime}> Published Time: {Article.publishedAt.slice(11, 19)}</Text>
          <Text style={styles.MainNewTitle}>{Article.title}</Text>
          <Text style={styles.MainNewDesc}>{Article.description}</Text>
          <Text style={styles.MainNewContent}>{Article.content}</Text>
          <Pressable onPress={onPressReadMore} style={{ width: '100%' }}>
            <Text style={{ textAlign: 'right', fontSize: 22, marginVertical: 10, marginHorizontal: 8 }}>Read More...</Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  
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
    fontSize: 28,
    fontWeight: "bold",
  },
  MainNewAuthor: {
    fontSize: 15,
    fontWeight: "bold",
    margin:8
  },
  MainNewTitle: {
    fontSize: 16,
    fontWeight:'bold',
    marginHorizontal: 10,
  },
  MainNewDesc: {
    fontSize: 18,
    marginHorizontal: 20,
    marginTop:10,
    lineHeight:28
  },
  MainNewContent: {
    fontSize: 18,
    marginHorizontal: 20,
    marginTop:10,
    lineHeight:28
  },
  MainNewDate: {
    fontSize: 16,
    paddingVertical:3
  },
  MainNewTime: {
    fontSize: 16,
    marginVertical:5
  },
  Image: {
    width: '100%',
    height: 150,
  },
});