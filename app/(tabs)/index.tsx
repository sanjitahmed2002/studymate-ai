import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>👋 Hello, Student!</Text>
            <Text style={styles.subtitle}>
              Ready to study today?
            </Text>
          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileIcon}>👤</Text>
          </View>
        </View>

        {/* Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <View>
              <Text style={styles.progressTitle}>Today's Progress</Text>
              <Text style={styles.progressSubtitle}>
                Keep going, you're doing great!
              </Text>
            </View>

            <Text style={styles.progressPercent}>65%</Text>
          </View>

          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.progressFooter}>
            <Text style={styles.progressSmall}>3 of 5 tasks completed</Text>
            <Text style={styles.progressSmall}>2 tasks left</Text>
          </View>
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>What do you want to do?</Text>

        {/* Feature Grid */}
        <View style={styles.featureGrid}>

          {/* AI Chat */}
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => {}}
          >
            <View style={[styles.iconBox, { backgroundColor: "#E8F0FE" }]}>
              <Text style={styles.featureIcon}>🤖</Text>
            </View>

            <Text style={styles.featureTitle}>AI Chat</Text>
            <Text style={styles.featureDescription}>
              Ask academic questions
            </Text>
          </TouchableOpacity>

          {/* PDF Summary */}
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => {}}
          >
            <View style={[styles.iconBox, { backgroundColor: "#FFF1E8" }]}>
              <Text style={styles.featureIcon}>📄</Text>
            </View>

            <Text style={styles.featureTitle}>PDF Summary</Text>
            <Text style={styles.featureDescription}>
              Summarize your notes
            </Text>
          </TouchableOpacity>

          {/* AI Quiz */}
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => {}}
          >
            <View style={[styles.iconBox, { backgroundColor: "#EAF8EF" }]}>
              <Text style={styles.featureIcon}>📝</Text>
            </View>

            <Text style={styles.featureTitle}>AI Quiz</Text>
            <Text style={styles.featureDescription}>
              Test your knowledge
            </Text>
          </TouchableOpacity>

          {/* Notes */}
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => {}}
          >
            <View style={[styles.iconBox, { backgroundColor: "#F4ECFF" }]}>
              <Text style={styles.featureIcon}>📚</Text>
            </View>

            <Text style={styles.featureTitle}>My Notes</Text>
            <Text style={styles.featureDescription}>
              Manage your notes
            </Text>
          </TouchableOpacity>

        </View>

        {/* Study Planner */}
        <TouchableOpacity
          style={styles.plannerCard}
          onPress={() => {}}
        >
          <View style={styles.plannerIcon}>
            <Text style={styles.plannerEmoji}>📅</Text>
          </View>

          <View style={styles.plannerContent}>
            <Text style={styles.plannerTitle}>Study Planner</Text>
            <Text style={styles.plannerDescription}>
              Plan your study sessions and stay organized.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Motivation */}
        <View style={styles.motivationCard}>
          <Text style={styles.motivationEmoji}>💡</Text>

          <View style={styles.motivationContent}>
            <Text style={styles.motivationTitle}>Study Tip</Text>
            <Text style={styles.motivationText}>
              Small progress every day leads to big results.
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    marginBottom: 24,
  },

  greeting: {
    fontSize: 24,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: "#687386",
  },

  profileCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E8F0FE",
    alignItems: "center",
    justifyContent: "center",
  },

  profileIcon: {
    fontSize: 24,
  },

  progressCard: {
    backgroundColor: "#4F6EF7",
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  progressTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  progressSubtitle: {
    fontSize: 12,
    color: "#DDE4FF",
    marginTop: 4,
  },

  progressPercent: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  progressBackground: {
    height: 9,
    backgroundColor: "#8298F9",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    width: "65%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },

  progressFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  progressSmall: {
    fontSize: 11,
    color: "#DDE4FF",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 15,
  },

  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  featureCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#EEF1F5",
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  featureIcon: {
    fontSize: 25,
  },

  featureTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#172033",
    marginBottom: 5,
  },

  featureDescription: {
    fontSize: 11,
    lineHeight: 16,
    color: "#7A8495",
  },

  plannerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#EEF1F5",
  },

  plannerIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#FFF5D9",
    alignItems: "center",
    justifyContent: "center",
  },

  plannerEmoji: {
    fontSize: 25,
  },

  plannerContent: {
    flex: 1,
    marginLeft: 14,
  },

  plannerTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#172033",
    marginBottom: 4,
  },

  plannerDescription: {
    fontSize: 11,
    color: "#7A8495",
    lineHeight: 16,
  },

  arrow: {
    fontSize: 28,
    color: "#9AA3B2",
    marginLeft: 8,
  },

  motivationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF9E8",
    borderRadius: 18,
    padding: 16,
    marginTop: 18,
  },

  motivationEmoji: {
    fontSize: 28,
  },

  motivationContent: {
    flex: 1,
    marginLeft: 12,
  },

  motivationTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6B5A22",
    marginBottom: 4,
  },

  motivationText: {
    fontSize: 12,
    color: "#806F32",
    lineHeight: 17,
  },
});