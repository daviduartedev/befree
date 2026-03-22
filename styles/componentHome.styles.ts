import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    textContainer: {
        marginTop: 8,
    },
    Title: {
        color: "#000000",
        fontWeight: "700",
        fontSize: 32,
        fontFamily: "SF Pro Text",
        marginBottom: 16,
        lineHeight: 38,
        letterSpacing: -0.5,
    },
    subtitle: {
        color: "#6B7280",
        fontWeight: "500",
        fontSize: 15,
        fontFamily: "SF Pro Text",
        lineHeight: 22,
    },
    buttonsContainer: {
        paddingBottom: 24,
        gap: 16,
    },
    primaryButton: {
        backgroundColor: "#f23030",
        paddingVertical: 18,
        borderRadius: 8,
        alignItems: "center",
        width: "100%",
    },
    primaryButtonPressed: {
        backgroundColor: "#C92A2E",
    },
    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "SF Pro Text",
    },
    secondaryButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        paddingVertical: 18,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        alignItems: "center",
        width: "100%",
    },
    secondaryButtonPressed: {
        backgroundColor: "#F9FAFB",
    },
    secondaryButtonText: {
        color: "#6B7280",
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "SF Pro Text",
    },
});
