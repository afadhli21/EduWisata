import React, {useRef} from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";
import Slides from "../components/Slides";
import SlideItems from "../components/SlideItems";
import Paginator from "../components/Paginator";
import CardWelcome from "../components/CardWelcome";

export default WelcomeScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
        <FlatList
          data={Slides}
          renderItem={({ item }) => <SlideItems item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: {contentOffset: {x: scrollX}}}], {
            useNativeDriver: false
          })}
        />
      <Paginator data={Slides} scrollX={scrollX}/>
      <CardWelcome />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
