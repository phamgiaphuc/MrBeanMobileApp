import React, { useState, useRef } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { TouchableOpacity } from 'react-native';
import { btnColors } from '@/constants/Colors';

const Page = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string; }[]>([]);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const genAI = useRef(new GoogleGenerativeAI("AIzaSyBnSihG4uEM_vvovolvJyn1EQV-EB-Y_II"));

  async function run() {
    setLoading(true);
    setError('');
    try {
      const model = genAI.current.getGenerativeModel({ model: "gemini-pro" });
      const chat = model.startChat();
      const result = await chat.sendMessage(msg);
      const response = await result.response.text();
      setMessages(prevMessages => [...prevMessages, { sender: 'user', text: msg }]);
      setMessages(prevMessages => [...prevMessages, { sender: 'AI', text: response }]);
    } catch (error) {
      console.error(error);
      setError(`Error: ${error}`);
    } finally {
      setMsg('');
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View key={index} style={message.sender === 'user' ? styles.userMessage : styles.aiMessage}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setMsg(text)}
          value={msg}
          placeholder="Type your message here"
          placeholderTextColor="#999"
          multiline={true}
        />
        {loading && <ActivityIndicator style={styles.spinner} />}
        <View>
        <TouchableOpacity style={styles.msgBtn} onPress={run}>
        <Text style={{fontSize: 18, fontFamily: 'Coolvetica', color: "white"}} >Send</Text>
        </TouchableOpacity>
        </View>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  msgBtn: {
    backgroundColor: btnColors.primary,
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  messagesContainer: {
    flexGrow: 1,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    maxWidth: '70%',
    borderRadius: 8,
    marginBottom: 8,
    padding: 8,
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F0F0F0',
    maxWidth: '70%',
    borderRadius: 8,
    marginBottom: 8,
    padding: 8,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    position: 'relative',
    marginBottom: 8
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    height: '100%',
  },
  spinner: {
    position: 'absolute',
    right: 70,
  },
  errorText: {
    color: 'red',
    marginTop: 8,
  },
});

export default Page;
