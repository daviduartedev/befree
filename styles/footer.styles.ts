import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  label: {
    fontSize: 11,
    color: "#9CA3AF",
    fontWeight: "500",
    fontFamily: "SF Pro Text",
  },

  labelActive: {
    color: "#2563EB",
  },
});
