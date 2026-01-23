import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#F9FAFB",
    },

    title: {
        fontSize: 22,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 8,
        fontFamily: "Century Gothic",
    },

    subtitle: {
        fontSize: 14,
        color: "#6B7280",
        marginBottom: 24,
        fontFamily: "SF Pro Text",
    },

    input: {
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        paddingHorizontal: 16,
        fontSize: 15,
        marginBottom: 16,
        color: "#111827",
        fontFamily: "SF Pro Text",
    },

    primaryButton: {
        height: 52,
        borderRadius: 12,
        backgroundColor: "#2563EB",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
    },

    primaryButtonDisabled: {
        backgroundColor: "#93C5FD",
    },

    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "600",
        fontFamily: "SF Pro Text",
    },
});
