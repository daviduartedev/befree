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
  },

  percent: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "600",
  },

  progressBar: {
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
    marginBottom: 24,
  },

  progressFill: {
    width: "20%",
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 6,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 24,
  },

  field: {
    marginBottom: 16,
  },

  label: {
    fontSize: 12,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 6,
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
    backgroundColor: "#FFFFFF",
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },

  button: {
    marginTop: 20,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
