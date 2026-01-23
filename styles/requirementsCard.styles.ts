import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 8,
        fontFamily: "Century Gothic",
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 12,
        gap: 12,

        // sombra iOS
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },

        // sombra Android
        elevation: 2,
    },

    item: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 12,
    },

    iconWrapper: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: "#EFF6FF",
        alignItems: "center",
        justifyContent: "center",
    },

    textWrapper: {
        flex: 1,
    },

    itemTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111827",
        fontFamily: "Century Gothic",
    },

    itemDescription: {
        fontSize: 12,
        color: "#6B7280",
        marginTop: 2,
        lineHeight: 16,
        fontFamily: "SF Pro Text",
    },
});
