import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#FFF",
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "Century Gothic",
    },

    profileCard: {
        alignItems: "center",
        backgroundColor: "#FFF",
        margin: 16,
        borderRadius: 16,
        padding: 20,
    },

    avatarWrapper: {
        position: "relative",
        marginBottom: 12,
    },

    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 2,
        borderColor: "#DBEAFE",
    },

    checkBadge: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#2563EB",
        width: 22,
        height: 22,
        borderRadius: 11,
        alignItems: "center",
        justifyContent: "center",
    },

    name: {
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "Century Gothic",
    },

    subtitle: {
        fontSize: 13,
        color: "#6B7280",
        marginTop: 4,
        fontFamily: "SF Pro Text",
    },

    memberSince: {
        fontSize: 12,
        color: "#9CA3AF",
        marginTop: 2,
        fontFamily: "SF Pro Text",
    },

    ratingCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFF",
        marginHorizontal: 16,
        borderRadius: 16,
        padding: 16,
    },

    ratingValue: {
        fontSize: 24,
        fontWeight: "600",
        fontFamily: "Century Gothic",
    },

    starsRow: {
        flexDirection: "row",
        marginTop: 4,
    },

    reviews: {
        fontSize: 12,
        color: "#6B7280",
        marginTop: 4,
        fontFamily: "SF Pro Text",
    },

    ratingBars: {
        flex: 1,
        marginLeft: 16,
        gap: 6,
    },

    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    ratingLabel: {
        fontSize: 12,
        color: "#374151",
        width: 10,
    },

    ratingTrack: {
        flex: 1,
        height: 6,
        backgroundColor: "#E5E7EB",
        borderRadius: 4,
        overflow: "hidden",
    },

    ratingFill: {
        height: "100%",
        backgroundColor: "#2563EB",
    },

    ratingPercent: {
        fontSize: 11,
        color: "#6B7280",
        width: 32,
        textAlign: "right",
    },

    section: {
        backgroundColor: "#FFF",
        margin: 16,
        borderRadius: 16,
        padding: 16,
    },

    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "Century Gothic",
    },

    link: {
        fontSize: 12,
        color: "#2563EB",
        fontFamily: "SF Pro Text",
    },

    earningsLabel: {
        fontSize: 12,
        color: "#6B7280",
        marginTop: 12,
    },

    earningsRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 4,
    },

    earningsValue: {
        fontSize: 22,
        fontWeight: "600",
        fontFamily: "Century Gothic",
    },

    earningsGrowth: {
        fontSize: 12,
        color: "#10B981",
    },

    chart: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 8,
        height: 80,
        marginTop: 16,
    },

    chartBar: {
        width: 18,
        height: 48,
        backgroundColor: "#93C5FD",
        borderRadius: 6,
    },

    chartBarLight: {
        width: 18,
        height: 36,
        backgroundColor: "#DBEAFE",
        borderRadius: 6,
    },

    chartBarActive: {
        width: 18,
        height: 64,
        backgroundColor: "#2563EB",
        borderRadius: 6,
    },

    chartBarSmall: {
        width: 18,
        height: 18,
        backgroundColor: "#DBEAFE",
        borderRadius: 6,
    },

    chartLabels: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
    },

    chartLabel: {
        fontSize: 11,
        color: "#6B7280",
        width: 18,
        textAlign: "center",
        fontFamily: "SF Pro Text",
    },

    skillsRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 12,
    },

    skillBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        backgroundColor: "#EFF6FF",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
    },

    skillText: {
        fontSize: 12,
        color: "#2563EB",
        fontWeight: "500",
        fontFamily: "SF Pro Text",
    },

    badgesRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
    },

    badgeItemActive: {
        alignItems: "center",
        gap: 6,
    },

    badgeItemLocked: {
        alignItems: "center",
        gap: 6,
        opacity: 0.5,
    },

    badgeText: {
        fontSize: 11,
        color: "#374151",
        textAlign: "center",
        width: 64,
        fontFamily: "SF Pro Text",
    },

    badgeTextDisabled: {
        fontSize: 11,
        color: "#9CA3AF",
        textAlign: "center",
        width: 64,
    },
});
