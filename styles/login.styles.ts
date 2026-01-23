import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 40,
    flexGrow: 1,
  },

  close: {
    alignSelf: "flex-start",
    marginBottom: 12,
  },

  header: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 24,
    fontFamily: "SF Pro Text",
  },

  logoWrapper: {
    alignItems: "center",
    marginBottom: 24,
  },

  logoBox: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: "#3A7F6B",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 36,
    height: 36,
    tintColor: "#FFFFFF",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    fontFamily: "Century Gothic",
  },
  htitle: {
    fontSize: 40,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    marginBottom: 120,
    fontFamily: "Century Gothic",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 32,
    fontFamily: "SF Pro Text",
  },

  field: {
    marginBottom: 16,
  },

  label: {
    fontSize: 12,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 6,
    fontFamily: "SF Pro Text",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    gap: 8,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
    fontFamily: "SF Pro Text",
  },

  forgot: {
    fontSize: 12,
    color: "#2563EB",
    textAlign: "right",
    marginBottom: 24,
    fontFamily: "SF Pro Text",
  },

  button: {
    backgroundColor: "#2563EB",
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
  },

  or: {
    textAlign: "center",
    fontSize: 11,
    color: "#9CA3AF",
    marginBottom: 16,
    fontFamily: "SF Pro Text",
  },

  socialRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 32,
  },

  socialButton: {
    flex: 1,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  socialIcon: {
    width: 16,
    height: 16,
  },

  socialText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
    fontFamily: "SF Pro Text",
  },

  footer: {
    textAlign: "center",
    fontSize: 13,
    color: "#6B7280",
    fontFamily: "SF Pro Text",
  },

  link: {
    color: "#2563EB",
    fontWeight: "600",
    fontFamily: "SF Pro Text",
  },
});
