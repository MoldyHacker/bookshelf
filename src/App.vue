<template>
  <v-app>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
</script>

<script lang="ts">
import DatePicker from "./components/DatePicker.vue";
// import * from 'vuetify/lib/components/VDatePicker';

export default {
  name: "App",
  components: {
    DatePicker,
  },
  data() {
    return {
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
  },
};
</script>
