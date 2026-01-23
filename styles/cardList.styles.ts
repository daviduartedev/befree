import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  imageContainer: {
    position: "relative",
    height: 160,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  badge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0284C7",
    fontFamily: "SF Pro Text",
  },

  content: {
    padding: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  headerText: {
    flex: 1,
    paddingRight: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
    fontFamily: "Century Gothic",
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    fontFamily: "SF Pro Text",
  },

  priceContainer: {
    alignItems: "flex-end",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0284C7",
    fontFamily: "Century Gothic",
  },

  total: {
    fontSize: 12,
    color: "#6B7280",
    fontFamily: "SF Pro Text",
  },

  infoRow: {
    marginBottom: 6,
  },

  infoText: {
    fontSize: 13,
    color: "#6B7280",
    fontFamily: "SF Pro Text",
  },

  button: {
    marginTop: 12,
    backgroundColor: "#1D9BF0",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonPressed: {
    backgroundColor: "#0284C7",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
  },
});
