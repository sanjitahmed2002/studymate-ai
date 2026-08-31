import { useRouter } from "expo-router";
import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";


import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);

    alert("Account created successfully!");

    router.replace("/(tabs)");
  } catch (error: any) {
    alert(error.message);
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>

            {/* Logo */}
            <View style={styles.logoCircle}>
              <Text style={styles.logo}>🎓</Text>
            </View>

            {/* Title */}
            <Text style={styles.title}>Create Account</Text>

            <Text style={styles.subtitle}>
              Start your smarter learning journey
            </Text>

            {/* Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#9AA3B2"
                value={name}
                onChangeText={setName}
              />
            </View>

            {/* Email */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#9AA3B2"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                style={styles.input}
                placeholder="Create a password"
                placeholderTextColor="#9AA3B2"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            {/* Confirm Password */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirm Password</Text>

              <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                placeholderTextColor="#9AA3B2"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>

            {/* Register Button */}
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >
              <Text style={styles.registerButtonText}>
                Create Account
              </Text>

              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>

            {/* Login */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>
                Already have an account?
              </Text>

              <TouchableOpacity
                onPress={() => router.push("/login")}
              >
                <Text style={styles.loginLink}> Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

  content: {
    paddingHorizontal: 28,
    paddingVertical: 35,
  },

  logoCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#E8F0FE",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 18,
  },

  logo: {
    fontSize: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#172033",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#687386",
    textAlign: "center",
    marginBottom: 30,
  },

  inputContainer: {
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#344054",
    marginBottom: 8,
  },

  input: {
    height: 55,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E1E5EC",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#172033",
  },

  registerButton: {
    height: 58,
    backgroundColor: "#4F6EF7",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 22,
    marginLeft: 10,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  loginText: {
    color: "#687386",
    fontSize: 14,
  },

  loginLink: {
    color: "#4F6EF7",
    fontSize: 14,
    fontWeight: "700",
  },
});