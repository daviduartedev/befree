import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imgContainer: {
    height: height * 0.58,
    width: "100%",
    justifyContent: "flex-end",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 120,
    height: 120,
    position: "absolute",
    alignSelf: "center",
    zIndex: 10,
  },
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: -44,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 32,
    justifyContent: "flex-start",
  },
});
