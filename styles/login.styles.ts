import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topPatternContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: height * 0.25,
  },
  bottomPatternContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: height * 0.25,
  },
  patternImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 0,
    paddingHorizontal: 24,
    paddingVertical: 40,
    marginTop: height * 0.1,
    marginBottom: height * 0.1,
    // Creating the "inverted" curved effect
    borderTopLeftRadius: 60,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 60,
    // Add subtle shadow if needed, but print looks flat with clear separation
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    fontFamily: "SF Pro Text",
  },
  subtitle: {
    fontSize: 16,
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 32,
    fontFamily: "SF Pro Text",
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
    fontFamily: "SF Pro Text",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f23030",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: "#FAFAFA",
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
    fontFamily: "SF Pro Text",
  },
  forgot: {
    fontSize: 14,
    color: "#f23030",
    textAlign: "right",
    marginTop: -10,
    marginBottom: 24,
    fontFamily: "SF Pro Text",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#f23030",
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
  },
  footerText: {
    textAlign: "center",
    fontSize: 15,
    color: "#9CA3AF",
    fontFamily: "SF Pro Text",
  },
  link: {
    color: "#f23030",
    fontWeight: "600",
  },
});
