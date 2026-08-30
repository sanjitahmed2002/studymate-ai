import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoCircle}>
          <Text style={styles.logo}>🎓</Text>
        </View>

        <Text style={styles.title}>Welcome to StudyMate AI</Text>

        <Text style={styles.subtitle}>
          Your AI-powered study companion
        </Text>

        <Text style={styles.description}>
          Ask questions, summarize PDFs, generate quizzes,
          manage notes, and plan your studies — all in one place.
        </Text>

        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🤖</Text>
            <Text style={styles.featureText}>AI Chat</Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📄</Text>
            <Text style={styles.featureText}>PDF Summary</Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📝</Text>
            <Text style={styles.featureText}>AI Quiz</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Study smarter • Learn better • Achieve more
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },

  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E8F0FE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  logo: {
    fontSize: 48,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4F6EF7",
    textAlign: "center",
    marginBottom: 16,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: "#687386",
    textAlign: "center",
    maxWidth: 340,
    marginBottom: 28,
  },

  features: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 35,
  },

  featureItem: {
    alignItems: "center",
    width: "31%",
  },

  featureIcon: {
    fontSize: 27,
    marginBottom: 7,
  },

  featureText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4B5565",
    textAlign: "center",
  },

  button: {
    width: "100%",
    height: 58,
    backgroundColor: "#4F6EF7",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 22,
    marginLeft: 10,
  },

  footer: {
    fontSize: 12,
    color: "#9AA3B2",
    textAlign: "center",
  },
});