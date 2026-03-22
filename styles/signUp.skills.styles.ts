import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
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
    color: "#f23030",
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
    width: "60%",
    height: "100%",
    backgroundColor: "#f23030",
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

  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  skillChip: {
    paddingHorizontal: 14,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  skillChipActive: {
    backgroundColor: "#f23030",
    borderColor: "#f23030",
  },

  skillText: {
    fontSize: 13,
    color: "#374151",
    fontWeight: "500",
    fontFamily: "SF Pro Text",
  },

  skillTextActive: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 40,
  },

  backButton: {
    flex: 1,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f23030",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "#f23030",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
  },

  nextButton: {
    flex: 1,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#f23030",
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
