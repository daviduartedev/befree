import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#F9FAFB",
  },

  side: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
  },

  right: {
    justifyContent: "flex-end",
  },

  center: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  iconButton: {
    padding: 8,
    borderRadius: 8,
  },
});
