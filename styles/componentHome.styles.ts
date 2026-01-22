import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        color: "#111827",
        fontWeight: "700",
        fontSize: 32,
        marginBottom: 12,
        fontFamily: "San-Francisco",
    },
    titleHighlight: {
        color: "#2563EB",
        fontWeight: "700",
        fontSize: 32,
        fontFamily: "San-Francisco",
    },
    subtitle: {
        color: "#6B7280",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "San-Francisco",
    },
    sectionSpacing: {
        marginTop: 16,
    },
    primaryButton: {
        backgroundColor: "#2563EB",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
    },
    primaryButtonPressed: {
        backgroundColor: "#2563EB",
    },
    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "San-Francisco",
    },
    secondaryButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        alignItems: "center", // ✅ igual ao primário
    },
    secondaryButtonText: {
        color: "#374151",
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "San-Francisco",
        // ❌ removido marginBottom
    },
    secondaryButtonPressed: {
        backgroundColor: "#F9FAFB",
    },
});
