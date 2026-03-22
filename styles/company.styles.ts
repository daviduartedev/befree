import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000", // Fallback
    },

    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    whiteContainer: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingTop: 60, // Safe area
    },

    headerTitle: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "800",
        color: "#111827",
        marginBottom: 24,
    },

    cardsRow: {
        flexDirection: "row",
        gap: 12,
        marginBottom: 20,
    },

    card: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#f3f4f6", // Light border to make it pop like the mockup
        elevation: 0, // Mockup has very subtle or no shadow
    },

    cardTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    cardIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: "#eef2ff",
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
        backgroundColor: "#dcfce7",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 999,
    },

    badgeTextGreen: {
        fontSize: 11,
        color: "#10b981",
        fontWeight: "700",
    },

    nextShift: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderWidth: 1,
        borderColor: "#f3f4f6",
    },

    nextShiftLabel: {
        fontSize: 11,
        color: "#9ca3af",
        fontWeight: "700",
        marginBottom: 4,
        textTransform: "uppercase",
    },

    nextShiftTitle: {
        fontSize: 17,
        fontWeight: "800",
        color: "#1f2937",
    },

    nextShiftRight: {
        alignItems: "flex-end",
    },

    nextShiftNumber: {
        fontSize: 24,
        fontWeight: "800",
        color: "#111827",
    },

    nextShiftVariation: {
        fontSize: 11,
        color: "#ef4444",
        fontWeight: "600",
        marginTop: 4,
    },

    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "800",
        color: "#111827",
    },

    sectionLink: {
        fontSize: 14,
        color: "#3b82f6",
        fontWeight: "700",
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

    statusRed: {
        backgroundColor: "#fde0d0",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
    },

    statusTextRed: {
        fontSize: 10,
        color: "#f23030",
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
        backgroundColor: "#fde0d0",
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
        backgroundColor: "#f23030",
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
    },

    logoContainer: {
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
    },

    logoImage: {
        width: 140,
        height: 60,
    },
});
