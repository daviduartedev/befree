import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 20,
    },

    cardsRow: {
        flexDirection: "row",
        gap: 12,
        marginTop: 12,
        marginBottom: 20,
    },

    card: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 18,
        elevation: 2,
    },

    cardTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    cardIcon: {
        width: 34,
        height: 34,
        borderRadius: 10,
        backgroundColor: "#EEF2FF",
        justifyContent: "center",
        alignItems: "center",
    },

    cardLabel: {
        fontSize: 13,
        color: "#6B7280",
        marginTop: 10,
    },

    cardValue: {
        fontSize: 26,
        fontWeight: "700",
        marginTop: 4,
        color: "#111827",
    },

    badgeGreen: {
        backgroundColor: "#ECFDF5",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
    },

    badgeTextGreen: {
        fontSize: 11,
        color: "#10B981",
        fontWeight: "600",
    },

    nextShift: {
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    nextShiftLabel: {
        fontSize: 11,
        color: "#6B7280",
        fontWeight: "600",
        marginBottom: 2,
    },

    nextShiftTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#111827",
    },

    nextShiftRight: {
        alignItems: "flex-end",
    },

    nextShiftNumber: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111827",
    },

    nextShiftVariation: {
        fontSize: 11,
        color: "#EF4444",
        marginTop: 2,
    },

    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    sectionTitle: {
        fontSize: 15,
        fontWeight: "700",
        color: "#111827",
    },

    sectionLink: {
        fontSize: 13,
        color: "#2563EB",
        fontWeight: "600",
    },

    listCard: {
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    listIcon: {
        width: 38,
        height: 38,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    listContent: {
        flex: 1,
    },

    listRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    listTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111827",
    },

    listSub: {
        fontSize: 12,
        color: "#6B7280",
        marginTop: 2,
    },

    statusBlue: {
        backgroundColor: "#EEF2FF",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
    },

    statusTextBlue: {
        fontSize: 10,
        color: "#2563EB",
        fontWeight: "700",
    },

    statusOrange: {
        backgroundColor: "#FFF7ED",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
    },

    statusTextOrange: {
        fontSize: 10,
        color: "#F97316",
        fontWeight: "700",
    },

    statusGreen: {
        backgroundColor: "#ECFDF5",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
    },

    statusTextGreen: {
        fontSize: 10,
        color: "#10B981",
        fontWeight: "700",
    },

    fab: {
        position: "absolute",
        bottom: 28,
        right: 20,
        backgroundColor: "#2563EB",
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
    },
});
