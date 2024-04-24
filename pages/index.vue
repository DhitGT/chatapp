<template>
  <v-container>
    <h1 class="text-center">CHAT APP</h1>
    <v-text-field
      v-model="user"
      color="#034021"
      class="grey grey darken-4 px-3"
    >
    </v-text-field>
    <v-list class="grey grey darken-3">
      <v-list-item v-for="(item, i) in chat" :key="i">
        <p>{{ item }}</p>
      </v-list-item>
    </v-list>
    <div class="d-flex align-center">
      <v-text-field
        v-model="newChat"
        color="#034021"
        class="grey grey darken-4 px-3"
      >
      </v-text-field>
      <v-btn icon @click="handleSend()"> <v-icon>mdi-send</v-icon></v-btn>
    </div>
  </v-container>
</template>
<script>
import io from "socket.io-client";
export default {
  data() {
    return {
      socket: null,
      chat: [],
      newChat: "",
      user: "",
    };
  },
  mounted() {
    // Directly access the $nuxtSocket object
    this.socket = io("http://localhost:3111", {
      withCredentials: true, // Include cookies in CORS request (if needed)
    });
    this.socket.on("pesan_dari_client", (message) => {
      // Update receivedMessage with the message from the server
      this.chat.push(message);
    });
  },

  methods: {
    handleSend() {
      this.chat.push(this.user + " : " + this.newChat);
      const pesan = this.user + " : " + this.newChat
      this.socket.emit("pesan_dari_client", pesan);
    },
  },
};
</script>

