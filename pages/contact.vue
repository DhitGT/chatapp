<template>
  <div>
    <v-container>
      <v-card
        class="rounded pa-3 ma-2"
        v-for="(contact, i) in contactLists"
        :key="i"
      >
        <div @click="handleContact(contact.contactId)">
          <p>{{ contact.name }}</p>
        </div>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactLists: [
        {
          name: "Udin",
          contactId: 1,
        },
        {
          name: "Jamal",
          contactId: 2,
        },
        {
          name: "Malik",
          contactId: 3,
        },
        {
          name: "Ahmad",
          contactId: 4,
        },
      ],
    };
  },
  methods: {
    handleContact(id) {
      // Navigate to the '/chat' route with the contact's ID
      this.$router.push({ path: `/chat/${id}` });
    },
  },
};
</script>
