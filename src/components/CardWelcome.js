import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

export default CardWelcome = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <TouchableOpacity style={styles.btnGoogle}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            source={require("../../assets/images/google-logo.png")}
          ></Image>
          <Text style={styles.textContainer}>Sign With Google</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Text
          style={[styles.textContainer, { color: COLORS.white, marginTop: 10 }]}
        >
          Belum Punya Akun?
          <Text
            style={[styles.textDaftar]}
            onPress={() => {
            }}
          >
            Daftar Disini
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
  },
  textContainer: {
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: SIZES.medium,
  },
  textDaftar: {
    color: COLORS.white,
    fontFamily: FONT.medium,
  },
  btnGoogle: {
    backgroundColor: COLORS.white,
    height: 50,
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
