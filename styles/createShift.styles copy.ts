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
        width: "50%",
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

    currency: {
        fontSize: 14,
        color: "#111",
        marginRight: 6,
    },

    calendarMock: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
    },

    calendarMonth: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 12,
    },

    calendarDay: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#2563eb",
        alignItems: "center",
        justifyContent: "center",
    },

    calendarDayText: {
        color: "#fff",
        fontWeight: "600",
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    fieldSmall: {
        width: "48%",
        marginTop: 20,
    },

    textArea: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        minHeight: 100,
        textAlignVertical: "top",
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
