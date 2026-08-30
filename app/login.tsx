import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Firebase Authentication আমরা পরে connect করব
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.content}>

          {/* Logo */}
          <View style={styles.logoCircle}>
            <Text style={styles.logo}>🎓</Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>Welcome Back</Text>

          <Text style={styles.subtitle}>
            Login to continue your learning journey
          </Text>

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
              placeholder="Enter your password"
              placeholderTextColor="#9AA3B2"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Forgot Password */}
          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => {}}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          {/* Register */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              Don't have an account?
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/register")}
            >
              <Text style={styles.registerLink}> Register</Text>
            </TouchableOpacity>
          </View>

        </View>
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

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
  },

  logoCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#E8F0FE",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 22,
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
    marginBottom: 35,
  },

  inputContainer: {
    marginBottom: 18,
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

  forgotButton: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },

  forgotText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4F6EF7",
  },

  loginButton: {
    height: 58,
    backgroundColor: "#4F6EF7",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 22,
    marginLeft: 10,
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
  },

  registerText: {
    color: "#687386",
    fontSize: 14,
  },

  registerLink: {
    color: "#4F6EF7",
    fontSize: 14,
    fontWeight: "700",
  },
});