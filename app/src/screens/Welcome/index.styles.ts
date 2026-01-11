import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 20
  },

  title: {
    color: "#60A5FA",
    fontWeight: "700",
    fontSize: 28,
    alignSelf: "center",
    marginBottom: 16,
    fontFamily: "San-Francisco",
  },

  imgContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 24,
    backgroundColor: "#F9FAFB",
    marginTop: 50
  },

  bgImage: {
    width: "100%",
    height: 150,
  },

  subtitle: {
    marginHorizontal: 10,
    color: "#4B5563",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "San-Francisco",
  },

  sectionSpacing: {
    marginTop: 20,
  },

  button: {
    backgroundColor: "#60A5FA",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  buttonPressed: {
    backgroundColor: "#059669",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "San-Francisco",
  },

  disclaimer: {
    color: "#9CA3AF",
    fontWeight: "400",
    fontSize: 12,
    marginTop: 30,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "San-Francisco",
  },
});
