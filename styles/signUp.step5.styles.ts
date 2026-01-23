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

  stepPercent: {
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
    width: "100%",
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

  summaryCard: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    gap: 14,
    marginBottom: 24,
  },

  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  summaryText: {
    fontSize: 14,
    color: "#111827",
    fontWeight: "500",
    fontFamily: "SF Pro Text",
  },

  termsBox: {
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    padding: 14,
    marginBottom: 24,
  },

  termsText: {
    fontSize: 12,
    color: "#6B7280",
    lineHeight: 18,
    fontFamily: "SF Pro Text",
  },

  link: {
    color: "#2563EB",
    fontWeight: "600",
    fontFamily: "SF Pro Text",
  },

  finishButton: {
    height: 48,
    borderRadius: 10,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  finishText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
  },

  skipText: {
    textAlign: "center",
    fontSize: 13,
    color: "#6B7280",
  },
});
