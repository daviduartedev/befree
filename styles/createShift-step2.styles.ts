import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
        padding: 16,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111",
    },

    stepText: {
        fontSize: 12,
        color: "#666",
    },

    progressBar: {
        height: 6,
        backgroundColor: "#e5e7eb",
        borderRadius: 6,
        marginTop: 6,
    },

    progressFill: {
        width: "100%",
        height: 6,
        backgroundColor: "#2563eb",
        borderRadius: 6,
    },

    progressPercent: {
        alignSelf: "flex-end",
        fontSize: 12,
        color: "#666",
        marginTop: 4,
    },

    field: {
        marginTop: 20,
    },

    label: {
        fontSize: 13,
        color: "#111",
        marginBottom: 6,
        fontWeight: "500",
    },

    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 12,
        height: 48,
    },

    input: {
        flex: 1,
        fontSize: 14,
        color: "#111",
    },

    requirementItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginTop: 10,
    },

    requirementActive: {
        borderWidth: 1,
        borderColor: "#2563eb",
        backgroundColor: "#eff6ff",
    },

    requirementText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        color: "#374151",
    },

    recurringBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#eff6ff",
        borderRadius: 14,
        padding: 14,
        marginTop: 24,
    },

    recurringTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111",
    },

    recurringSubtitle: {
        fontSize: 12,
        color: "#6b7280",
    },

    button: {
        marginTop: 32,
        backgroundColor: "#2563eb",
        borderRadius: 14,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
