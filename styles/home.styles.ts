import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF9F6",
    },

    categories: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
    },

    category: {
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    categoryActive: {
        backgroundColor: "#2563EB",
        borderColor: "#2563EB",
    },

    categoryText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#374151",
        fontFamily: "SF Pro Text",
    },

    categoryTextActive: {
        color: "#FFFFFF",
    },

    list: {
        padding: 16,
        gap: 16,
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        overflow: "hidden",

        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,

        elevation: 2,
    },

    image: {
        width: "100%",
        height: 160,
    },

    badge: {
        position: "absolute",
        top: 12,
        left: 12,
        backgroundColor: "#2563EB",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },

    badgeText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#FFFFFF",
        fontFamily: "SF Pro Text",
    },

    content: {
        padding: 16,
        gap: 8,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12,
    },

    info: {
        flex: 1,
    },

    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        fontFamily: "Century Gothic",
    },

    subtitle: {
        fontSize: 13,
        color: "#6B7280",
        fontFamily: "SF Pro Text",
    },

    priceBox: {
        alignItems: "flex-end",
    },

    price: {
        fontSize: 16,
        fontWeight: "600",
        color: "#2563EB",
        fontFamily: "Century Gothic",
    },

    total: {
        fontSize: 12,
        color: "#6B7280",
        fontFamily: "SF Pro Text",
    },

    meta: {
        fontSize: 13,
        color: "#6B7280",
        fontFamily: "SF Pro Text",
    },

    button: {
        marginTop: 8,
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: "#2563EB",
        alignItems: "center",
    },

    buttonText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#FFFFFF",
        fontFamily: "SF Pro Text",
    },
});
