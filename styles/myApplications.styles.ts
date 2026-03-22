import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff2eb",
    },
    list: {
        padding: 20,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: "#F3F4F6",
    },
    content: {
        flex: 1,
        marginLeft: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
    },
    company: {
        fontSize: 14,
        color: "#6B7280",
        marginTop: 2,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        alignSelf: "flex-start",
        marginTop: 8,
    },
    statusText: {
        fontSize: 12,
        fontWeight: "600",
    },
    status_PENDING: {
        backgroundColor: "#f23030",
        color: "#92400E",
    },
    status_APPROVED: {
        backgroundColor: "#D1FAE5",
        color: "#065F46",
    },
    status_REJECTED: {
        backgroundColor: "#FEE2E2",
        color: "#991B1B",
    },
    dateInfo: {
        alignItems: "flex-end",
    },
    date: {
        fontSize: 12,
        color: "#6B7280",
        fontWeight: "500",
    },
    value: {
        fontSize: 14,
        fontWeight: "700",
        color: "#f23030",
        marginTop: 4,
    }
});
