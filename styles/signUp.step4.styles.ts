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

  stepPercent: {
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
    width: "80%",
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

  card: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  uploadButton: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  uploadText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "600",
  },

  photoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  photoPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },

  photo: {
    width: "100%",
    height: "100%",
  },

  photoButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#2563EB",
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 8,
  },

  photoButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },

  tipBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#EFF6FF",
    borderRadius: 10,
    padding: 14,
    marginTop: 8,
    marginBottom: 24,
  },

  tipText: {
    fontSize: 13,
    color: "#1E40AF",
    flex: 1,
  },

  nextButton: {
    height: 48,
    borderRadius: 10,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  nextText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  skipText: {
    textAlign: "center",
    fontSize: 13,
    color: "#6B7280",
  },
});
