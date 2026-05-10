import { Image, Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function Index() {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isFocusedPass, setIsFocusedPass] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER SECTION */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/signIn_Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Let's experience the joy of telecare AI.</Text>
      </View>

      {/* INPUT SECTION */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Email Address</Text>
        <View style={[styles.inputContainer, isFocusedEmail && styles.inputContainerFocused]}>
          <Ionicons name="mail-outline" size={20} color="#8d8e8d" style={styles.inputIcon} />
          <TextInput
            placeholder="elementary221b@gmail.com"
            style={styles.textInput}
            onFocus={() => setIsFocusedEmail(true)}
            onBlur={() => setIsFocusedEmail(false)}
          />
        </View>

        <Text style={[styles.label, { marginTop: 15 }]}>Password</Text>
        <View style={[styles.inputContainer, isFocusedPass && styles.inputContainerFocused]}>
          <Ionicons name="lock-closed-outline" size={20} color="#8d8e8d" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter your password..."
            secureTextEntry
            style={styles.textInput}
            onFocus={() => setIsFocusedPass(true)}
            onBlur={() => setIsFocusedPass(false)}
          />
          <Ionicons name="eye-off-outline" size={20} color="#8d8e8d" />
        </View>
      </View>

      {/* SIGN IN BUTTON */}
      <View style={styles.buttonWidth}>
        <Pressable style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
          <Ionicons name="arrow-forward" size={20} color="white" style={{ marginLeft: 10 }} />
        </Pressable>
      </View>

      {/* SOCIAL LOGIN SECTION */}
      <View style={styles.socialRow}>
        <Pressable style={styles.socialIcon}><Ionicons name="logo-facebook" size={24} /></Pressable>
        <Pressable style={styles.socialIcon}><Ionicons name="logo-google" size={24} /></Pressable>
        <Pressable style={styles.socialIcon}><Ionicons name="logo-instagram" size={24} /></Pressable>
      </View>

      {/* FOOTER SECTION */}
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#444', fontWeight: "bold" }}>Don't have an account? </Text>
          <Pressable><Text style={styles.linkText}>Sign Up.</Text></Pressable>
        </View>
        <Pressable style={{ marginTop: 10 }}>
          <Text style={styles.linkText}>Forgot your password?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: 16,
    color: "#8d8e8d",
    marginTop: 5,
  },
  inputSection: {
    marginBottom: 30,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 55,
    backgroundColor: "#fff",
  },
  inputContainerFocused: {
    borderColor: "#85cc17", // The green border from your image
    borderWidth: 3,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "#85cc17",
    flexDirection: 'row',
    height: 55,
    width: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  signInButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 40,
  },
  socialIcon: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
  },
  linkText: {
    color: "#85cc17",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  buttonWidth: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});