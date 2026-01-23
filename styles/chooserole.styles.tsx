import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 20,
        paddingTop: 16,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
    },

    backButton: {
        marginRight: 8,
    },

    headerTitle: {
        fontSize: 14,
        fontWeight: "500",
        color: "#6B7280",
        fontFamily: "SF Pro Text",
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 8,
        lineHeight: 30,
        fontFamily: "Century Gothic",
    },

    subtitle: {
        fontSize: 14,
        color: "#6B7280",
        marginBottom: 24,
        lineHeight: 20,
        fontFamily: "SF Pro Text",
    },

    cards: {
        gap: 16,
        marginBottom: 32,
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        position: "relative",
    },

    cardActive: {
        borderColor: "#2563EB",
    },

    cardIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: "#F3F4F6",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
    },

    cardIconActive: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: "#E0E7FF",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 4,
        fontFamily: "Century Gothic",
    },

    cardDescription: {
        fontSize: 13,
        color: "#6B7280",
        lineHeight: 18,
        fontFamily: "SF Pro Text",
    },

    checkIcon: {
        position: "absolute",
        top: 16,
        right: 16,
    },

    primaryButton: {
        backgroundColor: "#2563EB",
        height: 52,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },

    primaryButtonDisabled: {
        opacity: 0.5,
    },

    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "SF Pro Text",
    },
});
