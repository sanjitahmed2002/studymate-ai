import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type Message = {
  id: string;
  text: string;
  sender: "user" | "ai";
};

export default function AIChatScreen() {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm StudyMate AI. How can I help you with your studies today?",
      sender: "ai",
    },
  ]);

  const sendMessage = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: trimmedMessage,
      sender: "user",
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://192.168.0.104:3000/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmedMessage,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server error");
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: "ai",
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        aiMessage,
      ]);
    } catch (error) {
      console.error("AI Chat Error:", error);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I couldn't connect to the AI server. Please make sure the backend is running and try again.",
        sender: "ai",
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        errorMessage,
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = ({
    item,
  }: {
    item: Message;
  }) => {
    const isUser = item.sender === "user";

    return (
      <View
        style={[
          styles.messageRow,
          isUser ? styles.userRow : styles.aiRow,
        ]}
      >
        {!isUser && (
          <View style={styles.aiAvatar}>
            <Text style={styles.aiAvatarText}>🤖</Text>
          </View>
        )}

        <View
          style={[
            styles.messageBubble,
            isUser
              ? styles.userBubble
              : styles.aiBubble,
          ]}
        >
          <Text
            style={[
              styles.messageText,
              isUser
                ? styles.userMessageText
                : styles.aiMessageText,
            ]}
          >
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <View style={styles.headerAvatar}>
              <Text style={styles.headerAvatarText}>
                🤖
              </Text>
            </View>

            <View>
              <Text style={styles.headerTitle}>
                StudyMate AI
              </Text>

              <Text style={styles.onlineText}>
                ● Online
              </Text>
            </View>
          </View>

          <View style={styles.headerSpace} />
        </View>

        {/* Chat Messages */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        />

        {/* Loading Indicator */}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <View style={styles.aiAvatarSmall}>
              <Text style={styles.aiAvatarText}>
                🤖
              </Text>
            </View>

            <View style={styles.loadingBubble}>
              <Text style={styles.loadingText}>
                StudyMate AI is thinking...
              </Text>
            </View>
          </View>
        )}

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Ask me anything..."
            placeholderTextColor="#9AA3B2"
            style={styles.input}
            multiline
            maxLength={1000}
            editable={!isLoading}
          />

          <TouchableOpacity
            style={[
              styles.sendButton,
              (!message.trim() || isLoading) &&
                styles.sendButtonDisabled,
            ]}
            onPress={sendMessage}
            disabled={
              !message.trim() || isLoading
            }
          >
            <Text style={styles.sendIcon}>
              ➤
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.disclaimer}>
          StudyMate AI can make mistakes. Check
          important information.
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  keyboardContainer: {
    flex: 1,
  },

  header: {
    height: 72,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF1F5",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F1F4F8",
    alignItems: "center",
    justifyContent: "center",
  },

  backIcon: {
    fontSize: 32,
    color: "#172033",
    lineHeight: 35,
    marginTop: -3,
  },

  headerCenter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },

  headerAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E8F0FE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  headerAvatarText: {
    fontSize: 21,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#172033",
  },

  onlineText: {
    fontSize: 11,
    color: "#35A853",
    marginTop: 2,
  },

  headerSpace: {
    width: 42,
  },

  chatContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 15,
  },

  messageRow: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "flex-end",
  },

  aiRow: {
    justifyContent: "flex-start",
  },

  userRow: {
    justifyContent: "flex-end",
  },

  aiAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E8F0FE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  aiAvatarText: {
    fontSize: 17,
  },

  messageBubble: {
    maxWidth: "78%",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 18,
  },

  aiBubble: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    borderColor: "#EEF1F5",
  },

  userBubble: {
    backgroundColor: "#4F6EF7",
    borderBottomRightRadius: 5,
  },

  messageText: {
    fontSize: 14,
    lineHeight: 21,
  },

  aiMessageText: {
    color: "#384152",
  },

  userMessageText: {
    color: "#FFFFFF",
  },

  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },

  aiAvatarSmall: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E8F0FE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  loadingBubble: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EEF1F5",
    borderRadius: 18,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  loadingText: {
    fontSize: 12,
    color: "#687386",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: "#EEF1F5",
  },

  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 110,
    backgroundColor: "#F1F4F8",
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: "#172033",
    marginRight: 9,
  },

  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#4F6EF7",
    alignItems: "center",
    justifyContent: "center",
  },

  sendButtonDisabled: {
    opacity: 0.45,
  },

  sendIcon: {
    fontSize: 21,
    color: "#FFFFFF",
    marginLeft: 2,
  },

  disclaimer: {
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: 9,
    color: "#9AA3B2",
    paddingBottom: 8,
  },
});