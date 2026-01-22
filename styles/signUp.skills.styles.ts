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

  stepLink: {
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
    width: "60%",
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
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  skillText: {
    fontSize: 13,
    color: "#374151",
    fontWeight: "500",
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
    borderColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "600",
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
  },
});
