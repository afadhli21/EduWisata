import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import { COLORS, FONT, SIZES } from "../../constants";

export default SlideItems = ({item}) => {
    const {width} = useWindowDimensions();
    return (
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
            <View style={{flex:0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
  },
  image:{
    flex:1,
    justifyContent:'center'
  },
  title:{
    fontFamily : FONT.medium,
    fontSize: SIZES.medium,
  },
  description:{
    fontFamily:FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray
  }
});
