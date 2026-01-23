import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
    backgroundColor: "#F9FAFB",
    flexGrow: 1,
  },

  progressWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  stepText: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
    fontFamily: "SF Pro Text",
  },

  stepLink: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "600",
    fontFamily: "SF Pro Text",
  },

  progressBar: {
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
    marginBottom: 24,
  },

  progressFill: {
    width: "40%",
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 6,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    fontFamily: "Century Gothic",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 24,
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
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  input: {
    fontSize: 14,
    color: "#111827",
    fontFamily: "SF Pro Text",
  },

  cepContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
    height: 48,
  },

  cepInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#111827",
  },

  cepButton: {
    width: 48,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  half: {
    flex: 1,
  },

  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 32,
  },

  backButton: {
    flex: 1,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
  },

  nextButton: {
    flex: 1,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  nextText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
  },
});
