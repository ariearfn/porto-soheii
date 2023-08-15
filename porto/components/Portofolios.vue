<template>
  <v-row>
    <v-col v-for="dt in datum" :key="dt.id">
      <v-hover v-slot="{ hover }">
        <v-card class="brandbase" flat :elevation="hover ? '10' : '0'">
          <v-card-text class="white--text"> {{ dt.title }} </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "portofolios",
  data() {
    return {
      datum: [
        {
          id: 1,
          title: "RS Jantung Tasikmalaya Landing",
          type: "Company Profile",
        },
        {
          id: 2,
          title: "RS Jantung Tasikmalaya Backoffice",
          type: "Information System",
        },
        {
          id: 3,
          title: "PT Agfa Selaras Pratama",
          type: "Company Profile",
        },
        {
          id: 4,
          title: "FitxGaming",
          type: "Boosting Web Page",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
